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
        $to_name = $data['fName'] . ' ' . $data['lName'];
        $to_email = $data['email'];

        Mail::send('emails.mail', $data, function ($message) use ($to_name, $to_email) {
            $message->to('carranco.jose.r@gmail.com', 'Jose Carranco')
                ->subject('Portfolio Contact form filled');

            $message->from($to_email, $to_name);
        });



        // Mail::to('carranco.jose.r@gmail.com')->send(new ContactMail($data));

        return response(["message_sent" => 'message sent'], 200);
    }
}
