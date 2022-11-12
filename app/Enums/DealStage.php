<?php

namespace App\Enums;

enum DealStage: int
{
    case Appointment_Scheduled = 1; 
    case Qualified_To_Buy = 2; 
    case Presentation_Scheduled = 3;
    case Decision_Maker = 4;
    case Contract_Sent = 5;
    case Closed_Won = 6;
    case Closed_Lost = 7;

    public function text(): string
    {
        return match($this) {
            self::Appointment_Scheduled => 'Appointment scheduled', 
            self::Qualified_To_Buy => 'Qualified to buy', 
            self::Presentation_Scheduled => 'Presentation scheduled', 
            self::Decision_Maker => 'Decision maker', 
            self::Contract_Sent => 'Contract sent',
            self::Closed_Won => 'Closed won',
            self::Closed_Lost => 'Closed lost',
        };
    }
}