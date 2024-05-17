<template>
  <div
    class="d-flex flex-column flex-shrink-0 bg-light side-bar-pai"
    style="width: 4.5rem"
  >
    <a
      href="#"
      class="d-block p-3 link-dark text-decoration-none"
      title=""
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      data-bs-original-title="Icon-only"
    >
      <img
        :src="require('../assets/img/toggle.png')"
        width="50"
        height="50"
        style="margin-left: -5px"
      />
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a class="nav-link py-3" @click="refreshPage()">
          <img
            :src="require('../assets/img/home-icon.png')"
            width="50"
            height="50"
            style="margin-left: -5px"
          />
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Dashboard"
        >
          <svg
            class="bi"
            width="24"
            height="24"
            role="img"
            aria-label="Dashboard"
          >
            <use xlink:href="#speedometer2"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Orders"
        >
          <svg class="bi" width="24" height="24" role="img" aria-label="Orders">
            <use xlink:href="#table"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Products"
        >
          <svg
            class="bi"
            width="24"
            height="24"
            role="img"
            aria-label="Products"
          >
            <use xlink:href="#grid"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Customers"
        >
          <svg
            class="bi"
            width="24"
            height="24"
            role="img"
            aria-label="Customers"
          >
            <use xlink:href="#people-circle"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarPai",
  methods: {
    refreshPage() {
      window.location.reload();
    },
  },
};
</script>
