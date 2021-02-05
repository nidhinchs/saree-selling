export class GlobalConstants {

  public static SUCCESS: string = "200";
  public static ERROR: string = "400";
  public static EMPTY: string = "500";

  public static customer: string = "customer";
  public static product: string = "product";
  public static add_customer: string = "customer/add";
  public static add_invoice: string = "invoices/add";
  public static home: string = "home";
  public static register: string = "register";
  public static login: string = "login";
  public static add_product: string = "product/add";
  public static invoices: string = "invoices";

  public static baseUrl: string = "http://localhost:3000/";
  public static url_get_customers: string = GlobalConstants.baseUrl + "api/get_customer";
  public static url_get_dashboard: string = GlobalConstants.baseUrl + "api/get_dashboard";
  public static url_get_products: string = GlobalConstants.baseUrl + "api/get_product";
  public static url_add_customer: string = GlobalConstants.baseUrl + "api/insert_customer";
  public static url_send_otp: string = GlobalConstants.baseUrl + "api/send_otp";
  public static url_verify_otp: string = GlobalConstants.baseUrl + "api/verify_otp";
  public static url_insert_products: string = GlobalConstants.baseUrl + "api/insert_products";

  public static siteTitle: string = "This is example of ItSolutionStuff.com";

  //session urls
  public static id = "id";
  public static phone = "phone";
  public static email = "email";
  public static address = "address";
  public static company_name = "company_name";
  public static company_logo = "company_logo";
  public static terms = "terms";
  public static signature = "signature";
}
