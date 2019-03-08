import { Router } from 'express'
import * as request from 'request'


export default Router().get('/', (req, res) => {
    res.render('index.njk', {
        name: req.query.name
    })
}).post('/', (req, res) => {
    const data = {
        template: "<style> @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,900,700,500,300,100); *{ margin: 0; box-sizing: border-box; } body{ background: #E0E0E0; font-family: 'Roboto', sans-serif; background-image: url(''); background-repeat: repeat-y; background-size: 100%; } ::selection {background: #f31544; color: #FFF;} ::moz-selection {background: #f31544; color: #FFF;} h1{ font-size: 1.5em; color: #222; } h2{font-size: .9em;} h3{ font-size: 1.2em; font-weight: 300; line-height: 2em; } p{ font-size: .7em; color: #666; line-height: 1.2em; } #invoiceholder{ width:100%; hieght: 100%; padding-top: 50px; } #headerimage{ z-index:-1; position:relative; top: -50px; height: 350px; background-image: url('http://michaeltruong.ca/images/invoicebg.jpg'); -webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,.15), inset 0 -2px 4px rgba(0,0,0,.15); -moz-box-shadow:inset 0 2px 4px rgba(0,0,0,.15), inset 0 -2px 4px rgba(0,0,0,.15); box-shadow:inset 0 2px 4px rgba(0,0,0,.15), inset 0 -2px 4px rgba(0,0,0,.15); overflow:hidden; background-attachment: fixed; background-size: 1920px 80%; background-position: 50% -90%; } #invoice{ position: relative; top: -290px; margin: 0 auto; width: 700px; background: #FFF; } [id*='invoice-']{ /* Targets all id with 'col-' */ border-bottom: 1px solid #EEE; padding: 30px; } #invoice-top{min-height: 120px;} #invoice-mid{min-height: 120px;} #invoice-bot{ min-height: 250px;} .logo{ float: left; height: 60px; width: 60px; background: url(http://michaeltruong.ca/images/logo1.png) no-repeat; background-size: 60px 60px; } .clientlogo{ float: left; height: 60px; width: 60px; background: url(http://michaeltruong.ca/images/client.jpg) no-repeat; background-size: 60px 60px; border-radius: 50px; } .info{ display: block; float:left; margin-left: 20px; } .title{ float: right; } .title p{text-align: right;} #project{margin-left: 52%;} table{ width: 100%; border-collapse: collapse; } td{ padding: 5px 0 5px 15px; border: 1px solid #EEE } .tabletitle{ padding: 5px; background: #EEE; } .service{border: 1px solid #EEE;} .item{width: 50%;} .itemtext{font-size: .9em;} #legalcopy{ margin-top: 30px; } form{ float:right; margin-top: 30px; text-align: right; } .legal{ width:70%; } </style> <div id='invoiceholder'> <div id='headerimage'></div> <div id='invoice' class='effect2'> <div id='invoice-top'> <div class='logo'></div> <div class='info'> <h2>{{ name }}</h2> <p> {{ email }}</br> {{ phoneNumber }} </p> </div><!--End Info--> <div class='title'> <h1>Invoice #1069</h1> <p>Issued: {{issueDate}}</br> Payment Due: {{dueDate}} </p> </div><!--End Title--> </div><!--End InvoiceTop--> <div id='invoice-mid'> <div class='clientlogo'></div> <div class='info'> <h2>{{clientName}}</h2> <p>{{clientEmail}}</br> {{clientPhone}}</br> </div> <div id='project'> <h2>Project Description</h2> <p>Proin cursus, dui non tincidunt elementum, tortor ex feugiat enim, at elementum enim quam vel purus. Curabitur semper malesuada urna ut suscipit.</p> </div> </div><!--End Invoice Mid--> <div id='invoice-bot'> <div id='table'> <table> <tr class='tabletitle'> <td class='item'><h2>Item Description</h2></td> <td class='Hours'><h2>Hours</h2></td> <td class='Rate'><h2>Rate</h2></td> <td class='subtotal'><h2>Sub-total</h2></td> </tr> {% for service in services %} <tr class='service'> <td class='tableitem'><p class='itemtext'>{{service.name}}</p></td> <td class='tableitem'><p class='itemtext'>{{service.quantity}}</p></td> <td class='tableitem'><p class='itemtext'>${{service.price}}</p></td> <td class='tableitem'><p class='itemtext'>${{service.total}}</p></td> </tr> {% endfor %} <tr class='tabletitle'> <td></td> <td></td> <td class='Rate'><h2>Total</h2></td> <td class='payment'><h2>${{total}}</h2></td> </tr> </table> </div><!--End Table--> <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'> <input type='hidden' name='cmd' value='_s-xclick'> <input type='hidden' name='hosted_button_id' value='QRZ7QTM9XRPJ6'> <input type='image' src='http://michaeltruong.ca/images/paypal.png' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'> </form> <div id='legalcopy'> <p class='legal'><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. </p> </div> </div><!--End InvoiceBot--> </div><!--End Invoice--> </div><!-- End Invoice Holder-->",
        content: {
            services: [
                { name: 'Yeet', quantity: 2, price: 100, total: 200 },
                { name: 'The best service in the world', quantity: 3, price: 300000, total: 900000 },
                { name: 'Another service', quantity: 70, price: 1, total: 70 }
            ],
            email: 'ellie@vertigomoon.co.uk',
            name: `${req.body.firstname} ${req.body.lastname}`,
            phoneNumber: '00000000',
            issueDate: '18th February',
            dueDate: '18th March',
            clientName: 'Some Cunt',
            clientEmail: 'some@cunt.com',
            clientPhone: '111111111',
            total: 900270
        }
    }

    var request_test = require('request')
    const options = {
        url: `${process.env.PDF_API_URL}/create-from-template`,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }

    request_test(options).pipe(res)


    //res.redirect(`/hello?name=${req.body.firstname} ${req.body.lastname}`)
})

