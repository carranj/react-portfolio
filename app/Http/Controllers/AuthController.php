<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function verify(Request $request)
    {
        $request->validate([
            'authCode' => 'required | string',
        ]);

        $authCode = $request->input('authCode');

        $userAccess = DB::table('user_access')
            ->where('userCode', $authCode)
            ->first();
        
        if($userAccess === null){
            return response(['unauthorized' => 'Access Code is incorrect'], 401);
        } else{
            $id = $userAccess->userId;
            $user = User::where('id', $id)->first();
            
            $token = $user->createToken("Portfolio Access Token")->plainTextToken;
            Auth::login($user);
            DB::table('user_access')
            ->where('userId', $id)
            ->update([
                'numVisited' => $userAccess->numVisited == null ? 1 : $userAccess->numVisited++,
                'lastVisited' => now()
            ]);

            DB::table('user_login_log')
            ->insert([
                'userId'=> $id,
                'time' => now()->timezone('America/Chicago')
            ]);

            $response = ['token' => $token];
            return response($response, 201);
        }
        



        
    }
}
