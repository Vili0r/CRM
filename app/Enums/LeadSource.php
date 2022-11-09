<?php

namespace App\Enums;

enum LeadSource: int
{
    case Advertisment = 1; 
    case Cold_Call = 2; 
    case Employee_Referal = 3;
    case External_Referal = 4;
    case Online_Store = 5;
    case Partner = 6;

    public function text(): string
    {
        return match($this) {
            self::Advertisment => 'Advertisment', 
            self::Cold_Call => 'Cold Call', 
            self::Employee_Referal => 'Employee referal', 
            self::External_Referal => 'External referal', 
            self::Online_Store => 'Online store',
            self::Partner => 'Partner',
        };
    }
}