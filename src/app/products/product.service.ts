import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';





@Injectable()
export class ProductService {

  private _productUrl = "http://ngapi4.herokuapp.com/api/getProducts";

  constructor(private _http: Http) {}

  getProductsHttp(): Observable<IProduct[]> {
    return this._http.get(this._productUrl).map((response: Response) => <IProduct[]>response.json()).catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error");
  }

  getProductsNative(): IProduct[] {
    return [
      {
        '_id': '5a05dacc734d1d68d42d31f3',
        'productId': '1',
        'productName': 'Cordless Drill Driver ',
        'productCode': 'GSR12V15N',
        'releaseDate': 'March 19, 2016',
        'description': 'The Bosch GSR12V15N brings an update to the 10.8 volt line.',
        'price': 19.95,
        'starRating': 3.5,
        'imageUrl': 'https://images.ffx.co.uk/tools/Bosch_0601868101.jpg'
      },
      {
        '_id': '5a05daec734d1d68d42d32ca',
        'productId': '2',
        'productName': 'Bosch Circular Saw',
        'productCode': 'GKS 190 7',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/61uZBZecIGL._SL1000_.jpg'
      },
      {
        '_id': '5a05db08734d1d68d42d3300',
        'productId': '5',
        'productName': 'Cordless chainsaw',
        'productCode': 'AKE 30 LI',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://www.bosch-do-it.de/media/garden/gardenmedia/199943/199952/24268/24268_prodimg/678255_600_370.png'
      },
      {
        '_id': '5a05db24734d1d68d42d3313',
        'productId': '8',
        'productName': 'Grinder Machine',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://5.imimg.com/data5/HN/QL/MY-41531855/bosch-gws-500x500.jpg'
      },
      {
        '_id': '5a05db3d734d1d68d42d3322',
        'productId': '10',
        'productName': 'Air Blower',
        'productCode': 'GBL620',
        'releaseDate': 'October 15, 2015',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://n1.sdlcdn.com/imgs/g/l/3/Bosch-GBL620-650W-Air-Blower-SDL177757315-1-5d85e.jpeg'
      }
    ]
  }

}


