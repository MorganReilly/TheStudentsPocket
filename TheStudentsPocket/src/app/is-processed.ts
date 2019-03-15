// Interface is used for some query's passed to the databases.
export interface IsProcessed {
    status: boolean;
    errorCode: string;
    message: string;
}
