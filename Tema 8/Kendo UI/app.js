$(document).ready(function () {
  // Kendo UI menu with font-awesome icons
  $("#verticalMenu").kendoMenu({
    scrollable: true,
    orientation: "vertical",
    dataSource: [
      { text: "Dashboard", spriteCssClass: "fa fa-home", url: "index.html" },
      { text: "Employees", spriteCssClass: "fa fa-user", url: "#" },
      { text: "Products", spriteCssClass: "fa fa-th-large", url: "#" },
      { text: "Orders", spriteCssClass: "fa fa-phone", url: "#" },
    ],
  });

  // Kendo UI data grid for employees json
  function getEmployeesGrid() {
    $("#grid").kendoGrid({
      dataSource: {
        transport: {
          read: {
            url: "employees.json",
          },
        },
        schema: {
          data: "employees",
          model: {
            id: "ID",
            fields: {
              firstName: { type: "string" },
              lastName: { type: "string" },
              employmentDate: { type: "date" },
              department: { type: "string" },
              grossSalary: { type: "string" },
              lastSalaryRaiseDate: { type: "date" },
            },
          },
          total: function (response) {
            return response.employees.length;
          },
        },
        pageSize: 5,
      },
      scrollable: true,
      sortable: true,
      filterable: true,
      pageable: {
        input: true,
        numeric: true,
      },
      columns: [
        {
          field: "ID",
          filterable: false,
        },
        {
          field: "firstName",
          filterable: false,
        },
        {
          field: "lastName",
          filterable: false,
        },
        {
          field: "employmentDate",
          filterable: false,
        },
        {
          field: "department",
          filterable: false,
        },
        {
          field: "grossSalary",
          filterable: false,
        },
        {
          field: "lastSalaryRaiseDate",
          filterable: false,
        },
      ],
    });
  }

  // here ends kendo ui employees table

  function getProductsListView() {
    $(function () {
      var dataSource = new kendo.data.DataSource({
        transport: {
          read: {
            url: "products.json",
            dataType: "json",
          },
        },
        schema: {
          data: "products",
          total: function (response) {
            return response.products.length;
          },
        },
        pageSize: 5,
      });

      $("#pager").kendoPager({
        dataSource: dataSource,
      });

      $("#listView").kendoListView({
        scrollable: false,
        height: 400,

        dataSource: dataSource,
        template: kendo.template($("#template").html()),
      });
    });
  }

  function getOrdersGrid() {
    $("#grid").kendoGrid({
      dataSource: {
        transport: {
          read: {
            url: "orders.json",
          },
        },
        schema: {
          data: "orders",
          model: {
            id: "OrderNumber",
            fields: {
              OrderDate: { type: "date" },
              ProductName: { type: "string" },
              Quantity: { type: "number" },
              UnitPrice: { type: "number" },
              TotalWithoutVAT: { type: "string" },
              VAT: { type: "string" },
              Total: { type: "string" },
            },
          },
          total: function (response) {
            return response.orders.length;
          },
        },
        pageSize: 5,
      },
      scrollable: true,
      sortable: true,
      filterable: true,
      pageable: {
        input: true,
        numeric: true,
      },
      columns: [
        {
          field: "OrderNumber",
          filterable: false,
        },
        {
          field: "OrderDate",
          filterable: false,
        },
        {
          field: "ProductName",
          filterable: false,
        },
        {
          field: "Quantity",
          filterable: false,
        },
        {
          field: "UnitPrice",
          filterable: false,
        },
        {
          field: "TotalWithoutVAT",
          filterable: false,
        },
        {
          field: "VAT",
          filterable: false,
        },
        {
          field: "Total",
          filterable: false,
        },
      ],
    });
  }

  // Handle views logic
  (function loadDefaultView() {
    loadViewSmooth();
    return $("main").html(
      `  <h2><i class="fa fa-dashboard"></i> DASHBOARD </h2>
                <div class="k-card">
                  <div class="k-card-header">
                      <h5 class="k-card-title"> <i class="fa fa-home"></i> Home | Page</h5>
                      <h6 class="k-card-subtitle">Welcome!</h6>
                  </div>
                  <div class="k-card-body">
                  <img src="loading/load.gif" alt="">
                      <p>Welcome to the future!</p>                    
                      <p>Turn your ordinary car into the underground car of your dreams!</p>
                  </div>
              </div>`
    );
  })();

  function loadView(view) {
    switch (view) {
      case "dashboard":
        $("main").html(
          `  <h2><i class="fa fa-dashboard"></i> DASHBOARD </h2>
            
                        <div class="k-card">
                          <div class="k-card-header">
                              <h5 class="k-card-title"> <i class="fa fa-home"></i> Home | Page</h5>
                              <h6 class="k-card-subtitle">Welcome!</h6>
                          </div>
                          <div class="k-card-body">
                              <p>Welcome to the dashboard!</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                      </div>`
        );
        break;
      case "employees":
        $("main").html(
          ` <h2><i class="fa fa-dashboard"></i> DASHBOARD </h2>
            
                        <div class="k-card">
                            <div class="k-card-header">
                                <h5 class="k-card-title"> <i class="fa fa-user"></i> Employees | Page</h5>
                                <h6 class="k-card-subtitle">Employee data</h6>
                            </div>
                            <div class="k-card-body">
                               <p>Bellow you can find some data regarding our company employees.</p>
                            </div>
                        </div>
              
                        <div id="grid"></div>`
        );
        break;
      case "products":
        $("main").html(
          ` <h2><i class="fa fa-dashboard"></i> DASHBOARD </h2>
                
                            <div class="k-card">
                                <div class="k-card-header">
                                    <h5 class="k-card-title"> <i class="fa fa-th-large"></i> Products | Page</h5>
                                    <h6 class="k-card-subtitle">Employee data</h6>
                                </div>
                                <div class="k-card-body">
                                   <p>Bellow you can find some data regarding our company products.</p>
                                </div>
                            </div>
        <div id="listView"></div>
        <div id="pager" class="k-pager-wrap"></div>
    <script type="text/x-kendo-template" id="template">
        <div class="product">
            <img src="../images/#= ProductID #.jpg" alt="#: ProductName # image" />
            <h3>#:ProductName#</h3>
            <p>Price: #:kendo.toString(ProductCurrentPrice, "c")#
            </p>
        </div>
    </script>`
        );
        break;
      case "orders":
        $("main").html(
          ` <h2><i class="fa fa-dashboard"></i> DASHBOARD </h2>
            
                        <div class="k-card">
                            <div class="k-card-header">
                                <h5 class="k-card-title"> <i class="fa fa-phone"></i> Orders | Page</h5>
                                <h6 class="k-card-subtitle">Orders data</h6>
                            </div>
                            <div class="k-card-body">
                               <p>Bellow you can find some data regarding our company orders.</p>
                            </div>
                        </div>
                        <div id = 'grid'></div>
                        `
        );
        break;
    }
  }

  function loadViewSmooth() {
    return $("main").hide().fadeIn(2000);
  }

  $("a").click(function (e) {
    // Get current view text
    let viewText = $(this).text().toLowerCase();
    switch (viewText) {
      case "dashboard":
        loadViewSmooth();
        loadView("dashboard");
        break;
      case "employees":
        loadViewSmooth();
        loadView("employees");
        getEmployeesGrid();
        break;
      case "products":
        loadViewSmooth();
        loadView("products");
        getProductsListView();
        break;
      case "orders":
        loadViewSmooth();
        loadView("orders");
        getOrdersGrid();
    }

    // Prevent links from firing
    e.preventDefault();
  });
});
