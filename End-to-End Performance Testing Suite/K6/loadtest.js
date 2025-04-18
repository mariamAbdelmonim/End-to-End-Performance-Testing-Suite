import { sleep, group ,check} from 'k6'
import http from 'k6/http'

export const options = {
  vus: 1, 
  duration: '1m',
}

export default function main() {
  let response

  group('page_2 - https://petstore.octoperf.com/actions/Account.action?signonForm=', function () {
    response = http.get('https://petstore.octoperf.com/actions/Account.action?signonForm=', {
      headers: {
        referer: 'https://petstore.octoperf.com/actions/Catalog.action',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    check(response, {
      'signon form loaded': (r) => r.status === 200 && r.body.includes('Sign In')
    })
})

  group('page_3 - https://petstore.octoperf.com/actions/Account.action?newAccountForm=', function () {
    response = http.get('https://petstore.octoperf.com/actions/Account.action?newAccountForm=', {
      headers: {
        referer: 'https://petstore.octoperf.com/actions/Account.action?signonForm=',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    check(response, {
      'newAccount form loaded': (r) => r.status === 200 
    })

  })

  group('page_4 - https://petstore.octoperf.com/actions/Account.action', function () {
    response = http.post(
      'https://petstore.octoperf.com/actions/Account.action',
      {
        username: 'omar813119',
        password: 'dddddd',
        repeatedPassword: 'dddddd',
        'account.firstName': 'omarr',
        'account.lastName': 'al',
        'account.email': 'omal@gmail.com',
        'account.phone': '01207753620',
        'account.address1': "16 baker's st",
        'account.address2': '',
        'account.city': 'alex',
        'account.state': 'airo',
        'account.zip': '1234',
        'account.country': 'egypt',
        'account.languagePreference': 'english',
        'account.favouriteCategoryId': 'FISH',
        newAccount: 'Save Account Information',
        _sourcePage:
          'F7rNBgH4u_CvrVBBXm9FCi3uyWcoFS-vI585oBNZWfVwo8fxZb86SKJHFVehK4ckUeKvH8c896Fl0KheK2aGIFyHSrUp6Yjh2XZdkVEZeZE=',
        __fp: '0NHg4NDG3fCe7zOJJf2QFYdIPGdDrVJjn_bDFnN2SECjz5SSIGszTlv6T3Z79UwDXKSyfN2VSDjQZ-CeePc1f2uJaNO8yOUUm8_uXhUQgFeMfju-T0YqXsj2kmMHwbOI-43PY3AqAiqlmEgsc3H-y8oVXeNK41qjIGqoBT31H5FrRtL4wHIYpLtwaOuQjtNu',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://petstore.octoperf.com',
          referer: 'https://petstore.octoperf.com/actions/Account.action?newAccountForm=',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    check(response, {
      'account registered': (r) => r.status === 200 && r.body.includes('Your account has been created')
    })
})

  group('page_5 - https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH', function () {
    response = http.get(
      'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
      {
        headers: {
          referer: 'https://petstore.octoperf.com/actions/Catalog.action',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    
    check(response, {
      'categoryId=FISH present': (r) => r.status === 200 && r.body.includes('categoryId=FISH')
    })
  })

 

group('page_6 - https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01', function () {
    response = http.get(
      'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
      {
        headers: {
          referer: 'https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    check(response, {
      'categoryId=FISH present': (r) => r.status === 200 && r.body.includes('categoryId=FISH')
    })
})
  group('page_7 - https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-1', function () {
    response = http.get(
      'https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-1',
      {
        headers: {
          referer: 'https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    check(response, {
      'ItemId=EST-1 present': (r) => r.status === 200 && r.body.includes('ItemId=EST-1')
    })
  })

  group('page_8 - https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-1', function () {
    response = http.get(
      'https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-1',
      {
        headers: {
          referer: 'https://petstore.octoperf.com/actions/Catalog.action?viewItem=&itemId=EST-1',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    check(response, {
      'ItemId=EST-1 present': (r) => r.status === 200 && r.body.includes('ItemId=EST-1')
    })
})

  group('page_9 - https://petstore.octoperf.com/actions/Order.action?newOrderForm=', function () {
    response = http.get('https://petstore.octoperf.com/actions/Order.action?newOrderForm=', {
      headers: {
        referer: 'https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  group('page_10 - https://petstore.octoperf.com/actions/Order.action', function () {
    response = http.post(
      'https://petstore.octoperf.com/actions/Order.action',
      {
        'order.cardType': 'Visa',
        'order.creditCard': '999 9999 9999 9999',
        'order.expiryDate': '12/03',
        'order.billToFirstName': 'omarr',
        'order.billToLastName': 'al',
        'order.billAddress1': "16 baker's st",
        'order.billAddress2': '',
        'order.billCity': 'alex',
        'order.billState': 'airo',
        'order.billZip': '1234',
        'order.billCountry': 'egypt',
        newOrder: 'Continue',
        _sourcePage:
          'K2ynVa-zJYyU2ftn45Yn2DqQD5X09ob4i-oGDAlMyaKDQo9NziPdv0qEuEThlvhDnI2xX-tWdhM_4UXNpfM5pOPFPfs1POz5ePEWTwJ5PvY=',
        __fp: 'bpkG0XMsiKIjdoq-krDEXu6J8P7dvEQ5GTnkNok6vLxjH572m1yo03ph3QT2ewfOawhHK2BcKmlERJtfZW1Z5WamGL9Ok1GI2zayp9jfo4TWgWIZHgs3nQ==',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://petstore.octoperf.com',
          referer: 'https://petstore.octoperf.com/actions/Order.action?newOrderForm=',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_11 - https://petstore.octoperf.com/actions/Order.action?newOrder=&confirmed=true', function () {
    response = http.get(
      'https://petstore.octoperf.com/actions/Order.action?newOrder=&confirmed=true',
      {
        headers: {
          referer: 'https://petstore.octoperf.com/actions/Order.action',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Brave";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    check(response, {
      'order confirmed': (r) => r.status === 200 && r.body.includes('Order Confirmed')
    })
})

  sleep(1)
}