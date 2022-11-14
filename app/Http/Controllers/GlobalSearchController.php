<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GlobalSearchController extends Controller
{
    private $models = [
        'Account',
        'Contact',
        'Deal',
        'Lead',
    ];

    public function search(Request $request)
    {
        $search = $request->input('search');
        
        $searchResults = [];
        foreach($this->models as $model) {
            $modelClass = 'App\Models\\' . $model;
            $query = $modelClass::query();
            
            $fields = $modelClass::$searchable;
            
            foreach($fields as $field) {
                $query->where($field, 'like', "%{$search}%");
            }

            $results = $query->take(10)->get();
            foreach ($results as $result) {
                $parsedData = $result->only($fields);
                $parsedData['model'] = $query;
                $parsedData['fields'] = $fields;
                $formattedFields = [];
                foreach ($fields as $field) {
                    $formattedFields[$field] = Str::title($field);
                }

                $parsedData['field_formated'] = $formattedFields;
                $parsedData['url'] = route(Str::plural(Str::lower($model)). '.show', $result->id);

                $searchResults[] = $parsedData;
            }
        }
        //dd($searchResults);

        return Inertia::render('Dashboard', compact('searchResults'));
    }
}
