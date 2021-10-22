<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function verify(Request $request)
    {
        $request->validate([
            'authCode' => 'required | string',
        ]);

        $authCode = $request->input('authCode');

        $user = DB::table('user_access')
            ->where('userCode', $authCode)
            ->get();
        dd($user);



        return response(['message_sent' => 'Message Sent'], 200);
    }
}
