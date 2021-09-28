<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectsController extends Controller
{
    public function getAllProjects()
    {
        $projects = DB::table('projects')
            ->select()
            ->get();

        return json_decode($projects);
    }

    public function getProject(Request $request)
    {
        $request->validate([
            'shortname' => 'required|string'
        ]);

        $shortname = $request->input('shortname');

        $project = DB::table('projects')
            ->where('shortname', $shortname)
            ->first();

        return json_encode($project);
    }

    public function getProjectSkills(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $id = $request->input('id');

        $project = DB::table('project_skills')
            ->join('skills', 'project_skills.skillId', '=', 'skills.skillId')
            ->select('skills.skillId AS id', 'skills.skillName as description', 'skills.className AS class')
            ->where('project_skills.projectId', $id)
            ->get();

        return json_encode($project);
    }

    public function getProjectDescriptions(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $id = $request->input('id');

        $project = DB::table('project_description')
            ->join('projects', 'project_description.projectId', '=', 'projects.id')
            ->select('project_description.order', 'project_description.title', 'project_description.description')
            ->where('projects.id', $id)
            ->orderBy('project_description.order', 'ASC')
            ->get();

        return json_encode($project);
    }
}
