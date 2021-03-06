<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectsController extends Controller
{
    public function getAllProjects(Request $request)
    {
        $request->validate([
            'authorized' => 'required|integer'
        ]);
        $authorized = $request->input('authorized');

        if ($authorized) {
            $projects = DB::table('projects')
                ->select()
                ->orderByDesc('submitDate')
                ->get();
        } else {
            $projects = DB::table('projects')
                ->where('isPrivate', 0)
                ->orderByDesc('submitDate')
                ->get();
        }

        $projects->map(function ($project) {
            $project->skills =
                DB::table('project_skills')
                ->join('skills', 'project_skills.skillId', '=', 'skills.skillId')
                ->select('skills.skillName', 'skills.classname')
                ->where('projectId', $project->id)
                ->get();
        });

        return json_encode($projects);
    }

    public function getAllSkills()
    {
        $skills = DB::table('skills')
            ->whereExists(function ($query) {
                $query->select()
                    ->from('project_skills')
                    ->whereColumn('project_skills.skillId', 'skills.skillId');
            })
            ->orderBy('skillName')
            ->get();

        return json_encode($skills);
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
            ->select('skills.skillId', 'skills.skillName', 'skills.classname')
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
