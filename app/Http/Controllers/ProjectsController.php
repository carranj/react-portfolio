<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ProjectsController extends Controller
{
    public function getAllProjects(){
        $projects = DB::table('projects')
        ->select()
        ->get();

        return json_decode($projects);
    }

    public function getProject(Request $request){
        $id = $request->input('id');

        $project = DB::table('projects')
        ->where('id', $id)
        ->first();

        return json_encode($project);
    }
}
