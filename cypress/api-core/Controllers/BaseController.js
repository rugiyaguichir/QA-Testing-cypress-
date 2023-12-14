export class BaseController{
    constructor(){

    }
    async authorize(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "password");
        urlencoded.append("username", "Admin");
        urlencoded.append("password", "Admin@Navi");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        const token =await fetch("http://167.114.201.175:5001/Token", requestOptions)
            .then(data => data.json())
            .then((json) => {
                return json.access_token})

        return token
    }

    async getClientsList(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.token );

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch("http://167.114.201.175:5001/api/clients?Sort=ClientId&Page=1&PageSize=10", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        return response
    }

    async EditClient(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.token );

        var raw = JSON.stringify({
            "PhoneNumber": "996444555118",
            "FirstName": "Orion1",
            "LastName": "Black23",
            "MiddleName": "string",
            "Email": "tester175@gmail.com",
            "Birthday": "2000-11-21T13:50:00.020Z",
            "RegChannel": "CRM",
            "Sex": "1",
            "Occupation": null,
            "Children": [],
            "ReferralClientId": 0,
            "BonusPhysicalCardCode": null,
            "DiscountPhysicalCardCode": null,
            "DoNotCallForReviews": false,
            "DoNotWriteForReviews": false,
            "FavoriteMessenger": 0,
            "IsBlocked": false,
            "ManagerComment": null
          });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://167.114.201.175:5001/api/clients/b8d1e581-db59-4273-894e-c30d7638ad8f/ReviewInfo", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
           
    }
     
    async DownloadCSV(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", process.env.token);
        var raw = JSON.stringify({
        "ColumnsForDetails": [
            1,
            2,
            4,
            5,
            6
        ],
        "ColumnsForOrders": []
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://167.114.201.175:5001/api/clients/b8d1e581-db59-4273-894e-c30d7638ad8f/DownloadCSV", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}