export interface InvesterContact {
    message?: any;
    systemErrorMessage?: any;
    statusCode: string;
    requestTime: Date;
    responseTime: Date;
    queryTime: string;
    result: InvesterResult[];
}

export interface InvesterResult {
    invContactID: string;
    fullName: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    address: string;
    phoneNumber: string;
    faxNumber: string;
    contactNote: string;
    investorContactGroup: InvestorContactGroup[];
}

export interface InvestorEntity {
    investorEntityId: number;
    investorEntityName: string;
}

export interface InvestorContactGroup {
    investorEntity: InvestorEntity[];
    contactGroup: string;
    fund: string;
}





