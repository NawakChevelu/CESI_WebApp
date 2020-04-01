export interface Incident {
    id: number;
    description_courte: string;
    description_longue: string;
    date_creation: Date;
    criticite: number;
    status: string;
}
