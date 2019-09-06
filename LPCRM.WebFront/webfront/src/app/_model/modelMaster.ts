
export interface item {
    value: number;
    text: string;
}

export interface JsonItemDropdrown {
    message?: any;
    systemErrorMessage?: any;
    statusCode: string;
    requestTime: Date;
    responseTime: Date;
    queryTime: string;
    result: item[];
}








