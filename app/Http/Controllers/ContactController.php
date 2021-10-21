<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function contactSubmit(Request $request)
    {
        $request->validate([
            'data.fName' => 'required | string',
            'data.lName' => 'required | string',
            'data.email' => 'required | email'
        ]);

        $data = request()->input('data');

        Mail::to('carranco.jose.r@gmail.com')
            ->send(new ContactMail($data));

        return response(['message_sent' => 'Message Sent'], 200);
    }
}
