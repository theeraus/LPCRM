import { Component, OnInit, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Helpers } from '../../../../helpers';
import { FormBuilder ,FormGroup, Validators} from "@angular/forms";
import { JsonItemDropdrown,item} from "../../../../_model/modelMaster";
import { InvesterContact, InvesterResult} from "../../../../_model/modelContact";
import { ParamSearch} from "../../../../_model/modelParam";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import {_throw} from 'rxjs/observable/throw';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Guid } from "guid-typescript";
declare var $: any;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})

export class IndexComponent implements OnInit, AfterViewInit {
    baseUrl:string = "http://206.189.36.17:6001/api";
    private tags:ParamSearch[]=[];
    private fundData : item[]=[];
    private investorEntity : item[]=[];
    private ContactType : item[]=[];
    private investerContact : InvesterContact;
    private investerResult : InvesterResult;
    ContactForm;

    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor(
        private _script: ScriptLoaderService, 
        private _http : HttpClient,
        private formBuilder: FormBuilder) {

        this.ContactForm = this.formBuilder.group({
                invContactID : "",
                firstName: ["",Validators.required],
                lastName: ["",Validators.required],
                email: ["",Validators.required],
                phoneNumber: ["",Validators.required],
                faxNumber: "",
                title: "",
                address: "",
                contactNote: "",
        });

    }

    fetchFundData() {
        this._http.get<JsonItemDropdrown>(this.baseUrl + '/masterdata/get_fund')
        .pipe(retry(1),catchError(this.handleError))
        .subscribe((res )=>{
            this.fundData= res.result;
            //console.log(res.result);
        });
    }
    fetchInvestorEntity() {
        this._http.get<JsonItemDropdrown>(this.baseUrl + '/masterdata/get_investor_entity')
        .pipe(retry(1),catchError(this.handleError))
        .subscribe((res )=>{
            this.ContactType= res.result;
            //console.log(res.result);
        });
    }
    fetchContactType() {
        this._http.get<JsonItemDropdrown>(this.baseUrl + '/masterdata/get_contact_type')
        .pipe(retry(1),catchError(this.handleError))
        .subscribe((res )=>{
            this.investorEntity = res.result;
            //console.log(res.result);
        });
    }
    fetchInvestorContact() {
        
        this._http.post(this.baseUrl + '/InvestorContact/fillter',this.tags)
        .pipe(retry(1),catchError(this.handleError)).subscribe((res )=>{
            //this.investorEntity= res.result;
            $("#table_contact tbody tr").html("");
            this.investerContact = res;
        });
    }

    updateContact(data){
        let serializedForm = JSON.stringify(data);

        this._http.put<InvesterContact>(this.baseUrl + '/InvestorContact/update',serializedForm,this.httpOptions)
        .pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
            if(res.statusCode == 200){
             
                this.fetchInvestorContact();
                $("#ContactModal").modal("hide");
            }else{
                alert(res.systemErrorMessage)
            }
        });
    }

    addNewContact(data){
        data.invContactID = Guid.create().toString;
        let serializedForm = JSON.stringify(data);
        console.log(serializedForm);
        this._http.post<InvesterContact>(this.baseUrl + '/InvestorContact/add',serializedForm,this.httpOptions)
        .pipe(retry(1),catchError(this.handleError)).subscribe((res)=>{
            if(res.statusCode == 200){
                this.fetchInvestorContact();
                $("#ContactModal").modal("hide");
            }else{
                alert(res.systemErrorMessage)
            }
        });
    }


    ngOnInit() {
        //this.tags.push({"paramType": "1","paramValue": "Davis"}) 
    
        //this.tags = [{"id": Guid.create().toString() ,"paramType": "1","paramValue": "Davis"},{"id": Guid.create().toString(),"paramType": "1","paramValue": "Toni"}];
        this.fetchFundData();
        this.fetchInvestorEntity();
        this.fetchContactType();
        this.fetchInvestorContact();
        
    }

    editContact(data){
        this.ContactForm = this.formBuilder.group({
            invContactID: data.invContactID,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            faxNumber: data.faxNumber,
            title: data.title,
            address: data.address,
            contactNote:data.contactNote,
          });

        $("#ContactModal").modal("show");
    }

    addContact(){
        
        this.ContactForm = this.formBuilder.group({
            invContactID : "",
            firstName: ["",Validators.required],
            lastName: ["",Validators.required],
            email: ["",Validators.required],
            phoneNumber: ["",Validators.required],
            faxNumber: "",
            title: "",
            address: "",
            contactNote: "",
        });

        $("#ContactModal").modal("show");
    }


    onSubmit(data) {
      
        if (this.ContactForm.valid) {
            if (data.invContactID ==""){ //add
                this.addNewContact(data);
            }else{ // edit
                this.updateContact(data);
            }

        }else{
            alert("Please check text required");
        }
       
        return false;

      }


    keySearch(event) {
        let obj = event.currentTarget
        let type = $("#selectTypeSearch").val();
        let value = {"id": Guid.create().toString(),"paramType": type,"paramValue": obj.value};
        this.tags.push(value);
        obj.value="";
		this.fetchInvestorContact() ;
    }

    removeTag(tag){
        console.log(tag)
        $("#"+tag.id).remove();
        let index = this.tags.indexOf(tag);
        this.tags.splice(index,1);
        this.fetchInvestorContact() ;
    }
    
    ngAfterViewInit() {

    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) { // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else { // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return _throw(errorMessage);
    }
}