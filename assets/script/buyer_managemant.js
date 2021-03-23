let containers = document.querySelectorAll(".dasboard_box");

var allData = {
  purchase_management: [
    {
      id: 0,
      title: "تصميم شعار شركة",
      buyer: "الحسين",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 45.75,
      receive: true,
      status: "مكتمل",
      action: {
        auth: false,
        return: false,
      },
    },
    {
      id: 1,
      title: "متجر إلكتروني",
      buyer: "الحسين",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 3,
      budget: 78.75,
      receive: true,
      status: "مكتمل",
      action: {
        auth: false,
        return: false,
      },
    },
  ],
  new_services_order: [
    {
      id: 0,
      title: "تطوير المواقع الإلكترونية",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 50,
    },
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 50,
    },
  ],
};

CollectPurchaseManagement = (items, container, paginationBox) => {
  $(() => {
    $(paginationBox).pagination({
      dataSource: allData[items],
      callback: function (data, pagination) {
        var projects_container = "";

        $.each(data, function (index, item) {
          projects_container += `<tr>
                    <td>${item.id}</td>
                    <td><a
                        href="./single_offer.html"
                        class="title"
                        target="_blank"
                        rel="noopener noreferrer"
                        >${item.title}</a
                      ></td>
                    <td>
                    <a
                        href="./user.html"
                        class="username"
                        target="_blank"
                        rel="noopener noreferrer"
                        >${item.buyer}</a
                      
                      </td>
                    <td>${item.date}</td>
                    <td>${item.timing}</td>
                    <td>${item.budget} ر.س</td>
                    <td>${item.receive}</td>
                    <td>${item.status}</td>
                    <td><input type="checkbox" name="project_${
                      item.id || index
                    }" id="action_project${item.id || index}" /></td>
            </tr>`;
        });

        $(container).html(projects_container);
      },
    });
  });
};

CollectNewServicesOrders = (items, container, paginationBox) => {
  $(() => {
    $(paginationBox).pagination({
      dataSource: allData[items],
      callback: function (data, pagination) {
        var projects_container = "";

        $.each(data, function (index, item) {
          projects_container += `<tr>
                <td>${item.id}</td>
                   <td>
                        <a
                        href="./single_service.html"
                        class="title"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        ${item.title}
                        </a>
                    </td>
                   <td>${item.date}</td>
                   <td>${item.timing}</td>
                   <td>${item.budget} ر.س</td>
                    <td><input type="checkbox" name="project_${
                      item.id || index
                    }" id="action_project${item.id || index}" /></td>
            </tr>`;
        });

        $(container).html(projects_container);
      },
    });
  });
};

containers.forEach((container) => {
  const ittype = container.dataset.type;
  console.log(ittype);
  const paginationContainer = document.querySelector(
    `.dasboard_box[data-type="${ittype}"] .pagination_container`
  );
  const setDataInside = document.querySelector(
    `.dasboard_box[data-type="${ittype}"] .data_inside`
  );

  if (ittype === "purchase_management") {
    CollectPurchaseManagement(
      "purchase_management",
      setDataInside,
      paginationContainer
    );
  } else if (ittype === "new_services_order") {
    CollectNewServicesOrders(
      "new_services_order",
      setDataInside,
      paginationContainer
    );
  }
});
