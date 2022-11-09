<?php

namespace App\Enums;

enum LeadStatus: int
{
    case Unqualified = 1; 
    case Qualified = 2; 
    case Proposal = 3;
    case Converted = 4;
    case Retired = 5;

    public function text(): string
    {
        return match($this) {
            self::Unqualified => 'Unqualified', 
            self::Qualified => 'Qualified', 
            self::Proposal => 'Proposal', 
            self::Converted => 'Converted', 
            self::Retired => 'Retired'
        };
    }
}