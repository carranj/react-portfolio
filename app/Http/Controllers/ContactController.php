<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function contactSubmit(Request $request)
    {
        $data = request()->input('data');

        Mail::to('carranco.jose.r@gmail.com')->send(new ContactMail($data));

        return back()->with('message_sent', 'Message sent');
    }
}
