import { Incident } from './incident';

let date = new Date(2020,3,31);
let sDate = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

export const INCIDENTS: Incident[] = [
    {id: 1, description_courte: "test1", description_longue: "test mais plus long1", date_creation: sDate, criticite: "Mineur", status: "résolu"},
    {id: 2, description_courte: "test2", description_longue: "test mais plus long2", date_creation: sDate, criticite: "Majeur", status: "en cours"},
    {id: 3, description_courte: "test3", description_longue: "test mais plus long3", date_creation: sDate, criticite: "Critique", status: "en cours"},
    {id: 5, description_courte: "test5", description_longue: "test mais plus long5", date_creation: sDate, criticite: "Majeur", status: "en cours"}
]