let containers = document.querySelectorAll(".dasboard_box");

var allData = {
  projects_management: [
    {
      id: 0,
      title: "تصميم شعار شركة",
      buyer: "الحسين",
      vendor: "جمال",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 45.75,
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
      vendor: "جمال",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 45,
      budget: 78.75,
      status: "مكتمل",
      action: {
        auth: false,
        return: false,
      },
    },
  ],
  new_orders: [
    {
      id: 0,
      title: "تطوير المواقع الإلكترونية",
      vendor: "الحسين",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 50,
    },
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      vendor: "الحسين",
      date: "Aug 22 , 2020 - 10:43:21 PM",
      timing: 2,
      budget: 50,
    },
  ],
};

CollectProjectsManagement = (items, container, paginationBox) => {
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
                    <td>
                    <a
                        href="./user.html"
                        class="username"
                        target="_blank"
                        rel="noopener noreferrer"
                        >${item.vendor}</a
                      </td>
                    <td>${item.date}</td>
                    <td>${item.timing}</td>
                    <td>${item.budget} ر.س</td>
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

CollectNewOrders = (items, container, paginationBox) => {
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
                    <td>
                        <a
                        href="./user.html"
                        class="username"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        ${item.vendor}
                        </a>
                    </td>
                   <td>${item.date}</td>
                   <td>${item.timing}</td>
                   <td>${item.budget} ر.س</td>
                    <td><form>
                      <button class="btn_dashboard_form cancel_btn" name="cancel" aria-label="cancel button" id="cancel_btn" data-user-id="${item.id}"></button>
                      <button class="btn_dashboard_form active_btn" name="active" aria-label="active button" id="active_btn" data-user-id="${item.id}"></button>
                    </form></td>
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

  if (ittype === "projects_management") {
    CollectProjectsManagement(
      "projects_management",
      setDataInside,
      paginationContainer
    );
  } else if (ittype === "new_orders") {
    CollectNewOrders("new_orders", setDataInside, paginationContainer);
  }
});
