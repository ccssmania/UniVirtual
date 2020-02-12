<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Skill;
use Intervention\Image\ImageManagerStatic as Image;

class SkillController extends Controller
{
    public function index(){
    	return view('skills.index');
    }

    public function getSkills(){
    	$skills = Skill::all();
    	return $skills;
    }

    public function setSkill(Request $request){
    	$skill = new Skill($request->all());
    	$hasFile = $request->hasFile('file') && $request->file->isValid();
		$ext = $request->file->extension();
    	if($skill->save()){
    		if($hasFile){
				$file = Image::make($request->file)->save(storage_path('app/images/skill_'.$skill->id. '.'.$ext));
			}
    		return response('OK',200);
    	}
    	else{
    		return response('error',500);
    	}
    }
}
