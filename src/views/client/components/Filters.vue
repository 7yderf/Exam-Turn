<template id="filters">
    <div
      class="col-12 mt-xl-7 mt-lg-1 mb-10 d-none d-lg-block filt position-sticky filters scroll"
    >
      <div class="row">
        <div class="col">
          <!--begin::Accordion-->
          <div class="accordion" id="kt_accordion_1">
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_1">
                <button
                  class="accordion-button"
                  :class="paramsQuery.year == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_1"
                  aria-expanded="true"
                  aria-controls="kt_accordion_1_body_1"
                  @click="activeFilter('years')"
                >
                  <span class="filters__text fw-normal">Año</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_1"
                class="accordion-collapse collapse"
                :class="paramsQuery.year != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_1"
              >
                <div class="accordion-body border-0">
                  <div class="row-years">
                    <div
                      class="text-center"
                      v-for="year in prop_years"
                      :key="year"
                    >
                      <button
                        @click="applyFilter('year', year, 'push')"
                        :class="paramsQuery.year.includes(year) && 'is-active'"
                        class="btn btn-filters-years"
                      >
                        <span class="filters__text fw-normal">{{ year }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_2">
                <button
                  class="accordion-button"
                  :class="
                    paramsQuery.brand == '' &&
                    paramsQuery.model == '' &&
                    'collapsed'
                  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_2"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_2"
                  @click="activeFilter('brand')"
                >
                  <span class="filters__text fw-normal">Marcas y modelos</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_2"
                class="accordion-collapse collapse"
                :class="
                  (paramsQuery.brand != '' || paramsQuery.model != '') && 'show'
                "
                aria-labelledby="kt_accordion_1_header_2"
              >
                <div class="accordion-body border-0">
                  <div class="row">
                    <div
                      class="col-12"
                      v-for="brand in searchedBrands"
                      :key="brand.id"
                    >
                      <!--begin::Accordion-->
                      <div
                        class="accordion accordion--brand"
                        :id="'kt_accordion_' + brand.name"
                      >
                        <div class="accordion-item border-0">
                          <h2
                            class="accordion-header accordion-header__brand"
                            :id="'kt_accordion_header' + brand.name"
                          >
                            <button
                              class="brand-btn accordion-button btn-filters px-3 py-3 border-0"
                              @click="applyFilter('brand', brand.name, 'push')"
                              :class="
                                paramsQuery.brand.includes(brand.name) &&
                                'is-active'
                              "
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="
                                '#kt_accordion_1_body_1' + brand.name
                              "
                              aria-expanded="true"
                              :aria-controls="
                                '#kt_accordion_1_body_1' + brand.name
                              "
                            >
                              <img
                                :src="`img/brand/${brand.name}.svg`"
                                class="brand-logo"
                              />
                              <span class="filters__text fw-normal">{{
                                brand.name
                              }}</span>
                            </button>
                          </h2>
                          <div
                            :id="'kt_accordion_1_body_1' + brand.name"
                            class="accordion-collapse"
                            :class="
                              paramsQuery.brand.includes(brand.name)
                                ? 'show'
                                : 'collapse'
                            "
                            :aria-labelledby="
                              'kt_accordion_header' + brand.name
                            "
                          >
                            <div class="accordion-body border-0">
                              <div class="btn-model">
                                <div
                                  class="btn-model__box"
                                  v-for="model in searchedModels?.filter(
                                    (model) => model.brand_id == brand.id
                                  )"
                                  :key="'m' + model.id"
                                >
                                  <button
                                    @click="
                                      applyFilter('model', model.name, 'push')
                                    "
                                    class="btn btn-filters py-1 px-4"
                                    :class="
                                      paramsQuery.model.includes(model.name) &&
                                      'is-active'
                                    "
                                  >
                                    <span class="filters__text fw-normal">{{
                                      model.name
                                    }}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--end::Accordion-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_3">
                <button
                  class="accordion-button"
                  :class="paramsQuery.type == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_3"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_3"
                >
                  <span class="filters__text fw-normal">Tipo de vehículo</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_3"
                class="accordion-collapse collapse"
                :class="paramsQuery.type != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_3"
              >
                <div class="accordion-body border-0">
                  <div v-for="tipo in searchedTypes" :key="tipo">
                    <button
                      @click="applyFilter('type', tipo.name, 'push')"
                      :class="
                        paramsQuery.type.includes(tipo.name) && 'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        tipo.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_4">
                <button
                  class="accordion-button"
                  :class="paramsQuery.state == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_4"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_4"
                  :disabled="paramsQuery.agency != ''"
                >
                  <span class="filters__text fw-normal">Estado</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_4"
                class="accordion-collapse collapse"
                :class="
                  paramsQuery.state != '' && paramsQuery.agency == '' && 'show'
                "
                aria-labelledby="kt_accordion_1_header_4"
              >
                <div class="accordion-body border-0">
                  <div v-for="state in searchedStates" :key="state">
                    <button
                      @click="applyFilter('state', state.name, 'push')"
                      :class="
                        paramsQuery.state.includes(state.name) && 'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        state.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_5">
                <button
                  class="accordion-button"
                  :class="paramsQuery.city == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_5"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_5"
                  :disabled="paramsQuery.agency != ''"
                >
                  <span class="filters__text fw-normal">Ciudad</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_5"
                class="accordion-collapse collapse"
                :class="
                  paramsQuery.city != '' && paramsQuery.agency == '' && 'show'
                "
                aria-labelledby="kt_accordion_1_header_5"
              >
                <div class="accordion-body border-0">
                  <div v-for="city in searchedCities" :key="city">
                    <button
                      @click="applyFilter('city', city.name, 'push')"
                      :class="
                        paramsQuery.city.includes(city.name) && 'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        city.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_6">
                <button
                  class="accordion-button"
                  :class="paramsQuery.transmission == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_6"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_6"
                >
                  <span class="filters__text fw-normal">Transmisión</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_6"
                class="accordion-collapse collapse"
                :class="paramsQuery.transmission != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_6"
              >
                <div class="accordion-body border-0">
                  <div
                    v-for="transmission in searchedTransmitions"
                    :key="transmission"
                  >
                    <button
                      @click="
                        applyFilter('transmission', transmission.name, 'push')
                      "
                      :class="
                        paramsQuery.transmission.includes(transmission.name) &&
                        'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        transmission.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_7">
                <button
                  class="accordion-button"
                  :class="paramsQuery.fuel == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_7"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_7"
                >
                  <span class="filters__text fw-normal">Combustible</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_7"
                class="accordion-collapse collapse"
                :class="paramsQuery.fuel != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_7"
              >
                <div class="accordion-body border-0">
                  <div v-for="fuel in searchedTypesFuel" :key="fuel">
                    <button
                      @click="applyFilter('fuel', fuel.name, 'push')"
                      :class="
                        paramsQuery.fuel.includes(fuel.name) && 'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        fuel.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_8">
                <button
                  class="accordion-button"
                  :class="paramsQuery.colorex == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_8"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_8"
                >
                  <span class="filters__text fw-normal">Color exterior</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_8"
                class="accordion-collapse collapse"
                :class="paramsQuery.colorex != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_8"
              >
                <div class="accordion-body border-0">
                  <div v-for="colorex in searchedColorExt" :key="colorex">
                    <button
                      @click="applyFilter('colorex', colorex.name, 'push')"
                      :class="
                        paramsQuery.colorex
                          .split(',')
                          ?.some((color) => color == colorex.name) &&
                        'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        colorex.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_9">
                <button
                  class="accordion-button"
                  :class="paramsQuery.colorin == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_9"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_9"
                >
                  <span class="filters__text fw-normal">Color interior</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_9"
                class="accordion-collapse collapse"
                :class="paramsQuery.colorin != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_9"
              >
                <div class="accordion-body border-0">
                  <div v-for="colorin in searchedColorInt" :key="colorin">
                    <button
                      @click="applyFilter('colorin', colorin.name, 'push')"
                      :class="
                        paramsQuery.colorin
                          .split(',')
                          ?.some((color) => color == colorin.name) &&
                        'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        colorin.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_10">
                <button
                  class="accordion-button"
                  :class="paramsQuery.agency == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_10"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_10"
                >
                  <span class="filters__text fw-normal">Agencias</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_10"
                class="accordion-collapse collapse"
                :class="paramsQuery.agency != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_10"
              >
                <div class="accordion-body border-0">
                  <div v-for="agencies in searchedAgenciesInt" :key="agencies">
                    <button
                      @click="applyFilter('agency', agencies.name, 'push')"
                      :class="
                        paramsQuery.agency.includes(agencies.name) &&
                        'is-active'
                      "
                      class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                    >
                      <span class="filters__text fw-normal">{{
                        agencies.name
                      }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_11">
                <button
                  class="accordion-button"
                  :class="paramsQuery.price == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_11"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_11"
                >
                  <span class="filters__text fw-normal">Precio</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_11"
                class="accordion-collapse collapse"
                :class="paramsQuery.price != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_11"
              >
                <div class="accordion-body border-0">
                 <div class="accordion__input-range">
                  <input class="input input--white" type="text" pattern="^[0-9]+$" v-model="inputMin" v-on:input="debounceInput">
                  <input class="input input--white" type="text"  pattern="^[0-9]+$" v-model="inputMax" v-on:input="debounceInput">
                 </div>
                  <Range
                    v-if="searchPrice[0] !== 0 || searchPrice[1] !== 0"
                    :valMin="
                      priceValue[0] == 0 ? searchPrice[0] : priceValue[0]
                    "
                    :valMax="
                      priceValue[1] == 0 ? searchPrice[1] : priceValue[1]
                    "
                    :valInitMin="searchPrice[0]"
                    :valInitMax="searchPrice[1]"
                    :type="'price'"
                    @searchRange="handleSearchRange"
                    @valorMinimo="listenerMin"
                    @valorMaximo="listenerMax"
                  />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="kt_accordion_1_header_12">
                <button
                  class="accordion-button"
                  :class="paramsQuery.kms == '' && 'collapsed'"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_1_body_12"
                  aria-expanded="false"
                  aria-controls="kt_accordion_1_body_12"
                >
                  <span class="filters__text fw-normal">Kilometraje</span>
                </button>
              </h2>
              <div
                id="kt_accordion_1_body_12"
                class="accordion-collapse collapse"
                :class="paramsQuery.kms != '' && 'show'"
                aria-labelledby="kt_accordion_1_header_12"
              >
                <div class="accordion-body border-0">
                  <Range
                    v-if="searchKms[0] !== 0 || searchKms[1] !== 0"
                    :valMin="kmsValue[0] == 0 ? searchKms[0] : kmsValue[0]"
                    :valMax="kmsValue[1] == 0 ? searchKms[1] : kmsValue[1]"
                    :valInitMin="searchKms[0]"
                    :valInitMax="searchKms[1]"
                    :type="'kms'"
                    @searchRange="handleSearchRange"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--end::Accordion-->
        </div>
      </div>
    </div>

    <div class="d-lg-none catalogo__deck">
      <div
        class="catalogo__deck-btn"
        data-bs-toggle="modal"
        data-bs-target="#modal_search"
      >
        <img
          src="@/assets/images/icons/icon-serch.svg"
          class="catalogo__deck-img"
          alt=""
        />
        <div class="catalogo__deck-box">
          <span class="catalogo__deck-filter-text">Buscar</span>
        </div>
      </div>
      <div
        data-bs-toggle="modal"
        data-bs-target="#modal_filters"
        class="catalogo__deck-btn"
      >
        <img
          src="@/assets/images/icons/icon-filter.svg"
          class="catalogo__deck-img"
          alt=""
        />
        <div :class="['catalogo__deck-box']">
          <span
            :class="[
              'catalogo__deck-filter-text',
              prop_qty_filters > 0 ? 'fw-bold' : '',
            ]"
            >Filtros</span
          >
          <span
            :class="[
              'catalogo__deck-filter-text',
              prop_qty_filters > 0 ? 'fw-bold' : '',
            ]"
            >{{
              `${prop_qty_filters > 0 ? `(${prop_qty_filters})` : ""}`
            }}</span
          >
        </div>
      </div>
      <div 
        class="catalogo__deck-btn"
        data-bs-toggle="modal"
        data-bs-target="#modal_order"
      >
        <img
          src="@/assets/images/icons/icon-order.svg"
          class="catalogo__deck-img"
          alt=""
        />
        <div class="catalogo__deck-box">
          <span class="catalogo__deck-filter-text">Ordenar</span>
        </div>
      </div>
    </div>
    <!--begin::Modal - New Card-->
    <div
      class="modal fade"
      ref="newCardModalRef"
      id="modal_filters"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen"
      >
        <!--begin::Modal content-->
        <div class="modal-content">
          <div class="modal-header py-3 px-5">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="fs-5 fw-bold btn-go"
            >
              Regresar
            </button>
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <span>
                <i class="isax-close-circle text-white fs-2x"></i>
              </span>
            </div>
          </div>

          <div class="modal-body px-5 py-3">
            <div class="d-flex justify-content-between modal-filter-header">
              <span>
                Filtros
                {{
                  `${prop_qty_filters > 0 ? `(${prop_qty_filters})` : ""}`
                }}</span
              >
              <div class="d-flex justify-content-between gap-3">
                <span class="modal-filter-limpiar" @click="resetFilter()"
                  >Limpiar filtros</span
                >
                <img src="@/assets/images/icons/refresh.svg" alt="" />
              </div>
            </div>
            <div class="options-filters">
              <p
                class="filters-active"
                @click="deleteFilter(active)"
                v-for="active in filtersActive"
                :key="active"
              >
                {{ active }}
                <img :src="Clear" alt="" class="catalogo__filters-icon-close" />
              </p>
            </div>
            <!--begin::Accordion-->
            <div class="accordion" id="kt_accordion_1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_1">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.year == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_1"
                    aria-expanded="true"
                    aria-controls="kt_accordion_1_body_1"
                    @click="activeFilter('years')"
                  >
                    <span class="filters__text fw-normal">Año</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_1"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.year != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_1"
                >
                  <div class="accordion-body border-0">
                    <div class="row-years">
                      <div
                        class="text-center"
                        v-for="year in prop_years"
                        :key="year"
                      >
                        <button
                          @click="applyFilter('year', year, 'push')"
                          :class="
                            paramsQuery.year.includes(year) && 'is-active'
                          "
                          class="btn btn-filters-years"
                        >
                          <span class="filters__text fw-normal">{{
                            year
                          }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_2">
                  <button
                    class="accordion-button"
                    :class="
                      paramsQuery.brand == '' &&
                      paramsQuery.model == '' &&
                      'collapsed'
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_2"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_2"
                    @click="activeFilter('brand')"
                  >
                    <span class="filters__text fw-normal"
                      >Marcas y modelos</span
                    >
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_2"
                  class="accordion-collapse collapse"
                  :class="
                    (paramsQuery.brand != '' || paramsQuery.model != '') &&
                    'show'
                  "
                  aria-labelledby="kt_accordion_1_header_2"
                >
                  <div class="accordion-body border-0">
                    <div class="row">
                      <div
                        class="col-12"
                        v-for="brand in searchedBrands"
                        :key="brand.id"
                      >
                        <!--begin::Accordion-->
                        <div
                          class="accordion accordion--brand"
                          :id="'kt_accordion_' + brand.name"
                        >
                          <div class="accordion-item border-0">
                            <h2
                              class="accordion-header accordion-header__brand"
                              :id="'kt_accordion_header' + brand.name"
                            >
                              <button
                                class="brand-btn accordion-button btn-filters px-3 py-3 border-0"
                                @click="
                                  applyFilter('brand', brand.name, 'push')
                                "
                                :class="
                                  paramsQuery.brand.includes(brand.name) &&
                                  'is-active'
                                "
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="
                                  '#kt_accordion_1_body_1' + brand.name
                                "
                                aria-expanded="true"
                                :aria-controls="
                                  '#kt_accordion_1_body_1' + brand.name
                                "
                              >
                                <img
                                  :src="`img/brand/${brand.name}.svg`"
                                  class="brand-logo"
                                />
                                <span class="filters__text fw-normal">{{
                                  brand.name
                                }}</span>
                              </button>
                            </h2>
                            <div
                              :id="'kt_accordion_1_body_1' + brand.name"
                              class="accordion-collapse"
                              :class="
                                paramsQuery.brand.includes(brand.name)
                                  ? 'show'
                                  : 'collapse'
                              "
                              :aria-labelledby="
                                'kt_accordion_header' + brand.name
                              "
                            >
                              <div class="accordion-body border-0">
                                <div class="btn-model">
                                  <div
                                    class="btn-model__box"
                                    v-for="model in searchedModels?.filter(
                                      (model) => model.brand_id == brand.id
                                    )"
                                    :key="'m' + model.id"
                                  >
                                    <button
                                      @click="
                                        applyFilter('model', model.name, 'push')
                                      "
                                      class="btn btn-filters py-1 px-4"
                                      :class="
                                        paramsQuery.model.includes(
                                          model.name
                                        ) && 'is-active'
                                      "
                                    >
                                      <span class="filters__text fw-normal">{{
                                        model.name
                                      }}</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--end::Accordion-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_3">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.type == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_3"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_3"
                  >
                    <span class="filters__text fw-normal"
                      >Tipo de vehículo</span
                    >
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_3"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.type != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_3"
                >
                  <div class="accordion-body border-0">
                    <div v-for="tipo in searchedTypes" :key="tipo">
                      <button
                        @click="applyFilter('type', tipo.name, 'push')"
                        :class="
                          paramsQuery.type.includes(tipo.name) && 'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          tipo.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_4">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.state == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_4"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_4"
                    :disabled="paramsQuery.agency != ''"
                  >
                    <span class="filters__text fw-normal">Estado</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_4"
                  class="accordion-collapse collapse"
                  :class="
                    paramsQuery.state != '' &&
                    paramsQuery.agency == '' &&
                    'show'
                  "
                  aria-labelledby="kt_accordion_1_header_4"
                >
                  <div class="accordion-body border-0">
                    <div v-for="state in searchedStates" :key="state">
                      <button
                        @click="applyFilter('state', state.name, 'push')"
                        :class="
                          paramsQuery.state.includes(state.name) && 'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          state.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_5">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.city == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_5"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_5"
                    :disabled="paramsQuery.agency != ''"
                  >
                    <span class="filters__text fw-normal">Ciudad</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_5"
                  class="accordion-collapse collapse"
                  :class="
                    paramsQuery.city != '' && paramsQuery.agency == '' && 'show'
                  "
                  aria-labelledby="kt_accordion_1_header_5"
                >
                  <div class="accordion-body border-0">
                    <div v-for="city in searchedCities" :key="city">
                      <button
                        @click="applyFilter('city', city.name, 'push')"
                        :class="
                          paramsQuery.city.includes(city.name) && 'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          city.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_6">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.transmission == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_6"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_6"
                  >
                    <span class="filters__text fw-normal">Transmisión</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_6"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.transmission != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_6"
                >
                  <div class="accordion-body border-0">
                    <div
                      v-for="transmission in searchedTransmitions"
                      :key="transmission"
                    >
                      <button
                        @click="
                          applyFilter('transmission', transmission.name, 'push')
                        "
                        :class="
                          paramsQuery.transmission.includes(
                            transmission.name
                          ) && 'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          transmission.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_7">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.fuel == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_7"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_7"
                  >
                    <span class="filters__text fw-normal">Combustible</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_7"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.fuel != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_7"
                >
                  <div class="accordion-body border-0">
                    <div v-for="fuel in searchedTypesFuel" :key="fuel">
                      <button
                        @click="applyFilter('fuel', fuel.name, 'push')"
                        :class="
                          paramsQuery.fuel.includes(fuel.name) && 'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          fuel.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_8">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.colorex == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_8"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_8"
                  >
                    <span class="filters__text fw-normal">Color exterior</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_8"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.colorex != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_8"
                >
                  <div class="accordion-body border-0">
                    <div v-for="colorex in searchedColorExt" :key="colorex">
                      <button
                        @click="applyFilter('colorex', colorex.name, 'push')"
                        :class="
                          paramsQuery.colorex
                            .split(',')
                            ?.some((color) => color == colorex.name) &&
                          'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          colorex.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_9">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.colorin == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_9"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_9"
                  >
                    <span class="filters__text fw-normal">Color interior</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_9"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.colorin != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_9"
                >
                  <div class="accordion-body border-0">
                    <div v-for="colorin in searchedColorInt" :key="colorin">
                      <button
                        @click="applyFilter('colorin', colorin.name, 'push')"
                        :class="
                          paramsQuery.colorin
                            .split(',')
                            ?.some((color) => color == colorin.name) &&
                          'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          colorin.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_10">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.agency == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_10"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_10"
                  >
                    <span class="filters__text fw-normal">Agencias</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_10"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.agency != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_10"
                >
                  <div class="accordion-body border-0">
                    <div
                      v-for="agencies in searchedAgenciesInt"
                      :key="agencies"
                    >
                      <button
                        @click="applyFilter('agency', agencies.name, 'push')"
                        :class="
                          paramsQuery.agency.includes(agencies.name) &&
                          'is-active'
                        "
                        class="btn btn-filters me-3 w-100 my-2 py-2 px-3 text-start"
                      >
                        <span class="filters__text fw-normal">{{
                          agencies.name
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_11">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.price == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_11"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_11"
                  >
                    <span class="filters__text fw-normal">Precio</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_11"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.price != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_11"
                >
                  <div class="accordion-body border-0">
                    <Range
                      v-if="searchPrice[0] !== 0 || searchPrice[1] !== 0"
                      :valMin="
                        priceValue[0] == 0 ? searchPrice[0] : priceValue[0]
                      "
                      :valMax="
                        priceValue[1] == 0 ? searchPrice[1] : priceValue[1]
                      "
                      :valInitMin="searchPrice[0]"
                      :valInitMax="searchPrice[1]"
                      :type="'price'"
                      @searchRange="handleSearchRange"
                    />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_12">
                  <button
                    class="accordion-button"
                    :class="paramsQuery.kms == '' && 'collapsed'"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_12"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_12"
                  >
                    <span class="filters__text fw-normal">Kilometraje</span>
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_12"
                  class="accordion-collapse collapse"
                  :class="paramsQuery.kms != '' && 'show'"
                  aria-labelledby="kt_accordion_1_header_12"
                >
                  <div class="accordion-body border-0">
                    <Range
                      v-if="searchKms[0] !== 0 || searchKms[1] !== 0"
                      :valMin="kmsValue[0] == 0 ? searchKms[0] : kmsValue[0]"
                      :valMax="kmsValue[1] == 0 ? searchKms[1] : kmsValue[1]"
                      :valInitMin="searchKms[0]"
                      :valInitMax="searchKms[1]"
                      :type="'kms'"
                      @searchRange="handleSearchRange"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <div class="fixed-button-modal">
              <button
                data-bs-dismiss="modal"
                class="btn btn-primary w-100 mt-6 button-modal"
              >
                <span class="filters__text fw-normal">Aplicar filtros</span>
              </button>
            </div>
            <!--end::Accordion-->

            <!-- <button
            @click="clearFilters"
            data-bs-dismiss="modal"
            class="btn btn-secondary fs-base fw-normal w-100 mt-6"
          >
            <span class="filters__text fw-normal">Limpiar filtros</span>
          </button> -->
          </div>
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - New Card-->

    <div class="modal fade" ref="searchModalRef" id="modal_search" tabindex="-1" aria-hidden="true">
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
        <!--begin::Modal content-->
        <div class="modal-content">
          <div class="modal-header py-3 px-5"></div>
    
          <div class="modal-body px-5 py-3">
            <div class="d-flex justify-content-between modal-filter-header">
              <span class=""> Búsqueda </span>
              <button type="button" data-bs-dismiss="modal" class="fs-5 fw-bold btn-go filters-icon-close">
                <img :src="Clear" alt="" class="filters-icon-close" />
              </button>
            </div>
            <div class="mt-5">
              <Search></Search>
            </div>
          </div>
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - New Card-->
    <div class="modal fade" ref="searchModalRef" id="modal_order" tabindex="-1" aria-hidden="true">
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
        <!--begin::Modal content-->
        <div class="modal-content">
          <div class="modal-header py-3 px-5"></div>
    
          <div class="modal-body px-5 py-3">
            <div class="d-flex justify-content-between modal-filter-header">
              <span class=""> Ordenar </span>
              <div class="d-flex justify-content-between gap-2 reset-order">
                <span class="modal-filter-limpiar" @click="orderOpcions(0)"
                  >Limpiar </span
                >
                <img src="@/assets/images/icons/refresh.svg" alt="" />
              </div>
              <button type="button" data-bs-dismiss="modal" class="fs-5 fw-bold btn-go filters-icon-close">
                <img :src="Clear" alt="" class="filters-icon-close" />
              </button>
            </div>
            <div class="mt-5">

              <div class="filters__modal-order">
                <p class="filters__order-opcion" :data-active="orderby == 1"  @click="orderOpcions(1)">
                  Menor precio
                </p>
                <p class="filters__order-opcion" :data-active="orderby == 2" @click="orderOpcions(2)">
                  Mayor precio
                </p>
                <p class="filters__order-opcion" :data-active="orderby == 3" @click="orderOpcions(3)">
                  Más antiguos
                </p>
                <p class="filters__order-opcion" :data-active="orderby == 4" @click="orderOpcions(4)">
                  Más recientes
                </p>
                <p class="filters__order-opcion" :data-active="orderby == 5" @click="orderOpcions(5)">
                  Menos km
                </p>
                <p class="filters__order-opcion" :data-active="orderby == 6" @click="orderOpcions(6)">
                  Más km
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - New Card-->
  
</template>

<script lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import Range from "./Range.vue";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import Clear from "@/assets/images/icons/icon-close-filter.svg";
import Search from "./Search.vue";
import _ from "lodash";
import * as bootstrap from "bootstrap";
import { validate } from 'vee-validate';
export default {
  name: "Filters",
  components: {
    Range,
    Search,
  },
  props: {
    prop_brands: Array,
    prop_years: Array,
    prop_locations: Array,
    prop_cities: Array,
    prop_fuel: Array,
    prop_type: Array,
    prop_trans: Array,
    prop_models: Array,
    prop_colorex: Array,
    prop_colorin: Array,
    prop_agencies: Array,
    prop_prices: Array,
    prop_kms: Array,
    prop_qty_filters: Number,
    prop_filters_active: Object,
  },
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const searchBrand = ref("");
    const searchModel = ref("");
    const searchState = ref("");
    const searchType = ref("");
    const years = ref<any>([]);
    const transmissions = ref<any>([]);
    const brands = ref<any>([]);
    const models = ref<any>([]);
    const colorex = ref<any>([]);
    const colorin = ref<any>([]);
    const agencies = ref<any>([]);
    const type = ref<any>([]);
    const fuel = ref<any>([]);
    const locations = ref<any>([]);
    const cities = ref<any>([]);
    const priceValue = ref<any>([]);
    const kmsValue = ref<any>([]);
    const transmission = ref<any>([]);
    const fuelModel = ref<any>([]);
    const locationsModel = ref<any>([]);
    const cityModel = ref<any>([]);
    const priceFrom = ref<any>([]);
    const priceTo = ref<any>([]);
    const kmsFrom = ref<any>([]);
    const kmsTo = ref<any>([]);
    const orderby = ref(0);
    const inputMin = ref<any>([]);
    const inputMax = ref<any>([]);
    const rangeValuePrice = ref<any>([]);
    const  limitsValuesPrice = ref<any>([]);
    const filtersActive = computed(() => {
      return props.prop_filters_active;
    });

    const paramsQuery = ref({
      year: "",
      model: "",
      brand: "",
      type: "",
      fuel: "",
      transmission: "",
      price: "",
      state: "",
      city: "",
      search: "",
      colorex: "",
      colorin: "",
      agency: "",
      kms: "",
    });
    watch(
      () => route.query,
      () => {
        assingParams();
      }
    );
    

    onMounted(() => {
      // Promise.all([getTypes(), getYears(), getBrands(), gettransmission(), getFuel(), getlocations()])
      type.value = props.prop_type;
      fuel.value = props.prop_fuel;
      locations.value = props.prop_locations;
      cities.value = props.prop_cities;
      years.value = props.prop_years;
      brands.value = props.prop_brands;
      models.value = props.prop_models;
      transmissions.value = props.prop_trans;
      colorex.value = props.prop_colorex;
      colorin.value = props.prop_colorin;
      agencies.value = props.prop_agencies;
      priceValue.value = props.prop_prices;
      kmsValue.value = props.prop_kms;
      assingParams();
    });
    const getRangeValues = (val) => {
      return val.replaceAll(" ", "").replaceAll(",", "").split("-");
    };

    const assingParams = () => {
      paramsQuery.value.year = route.query["year"]
        ? route.query["year"].toString()
        : "";
      paramsQuery.value.model = route.query["model"]
        ? route.query["model"].toString()
        : "";
      paramsQuery.value.price = route.query["price"]
        ? route.query["price"].toString()
        : "";
      paramsQuery.value.kms = route.query["kms"]
        ? route.query["kms"].toString()
        : "";
      paramsQuery.value.search = route.query["search"]
        ? route.query["search"].toString()
        : "";
      if (paramsQuery.value.price.length > 1) {
        const values = getRangeValues(paramsQuery.value.price);
        priceValue.value[0] = parseInt(values[0]);
        priceValue.value[1] = parseInt(values[1]);
        [priceFrom.value, priceTo.value] = priceValue.value
          .toString()
          .split(",");
        priceFrom.value = formatTooltip(priceFrom.value);
        priceTo.value = formatTooltip(priceTo.value);
      }
      if (paramsQuery.value.kms.length > 1) {
        const values = getRangeValues(paramsQuery.value.kms);
        kmsValue.value[0] = parseInt(values[0]);
        kmsValue.value[1] = parseInt(values[1]);
        [kmsFrom.value, kmsTo.value] = kmsValue.value.toString().split(",");
        kmsFrom.value = formatTooltip(kmsFrom.value);
        kmsTo.value = formatTooltip(kmsTo.value);
      }
      paramsQuery.value.brand = route.query["brand"]
        ? route.query["brand"].toString()
        : "";
      paramsQuery.value.fuel = route.query["fuel"]
        ? route.query["fuel"].toString()
        : "";
      paramsQuery.value.transmission = route.query["transmission"]
        ? route.query["transmission"].toString()
        : "";
      paramsQuery.value.type = route.query["type"]
        ? route.query["type"].toString()
        : "";
      paramsQuery.value.city = route.query["city"]
        ? route.query["city"].toString()
        : "";
      paramsQuery.value.state = route.query["state"]
        ? route.query["state"].toString()
        : "";
      paramsQuery.value.colorex = route.query["colorex"]
        ? route.query["colorex"].toString()
        : "";
      paramsQuery.value.colorin = route.query["colorin"]
        ? route.query["colorin"].toString()
        : "";
      paramsQuery.value.agency = route.query["agency"]
        ? route.query["agency"].toString()
        : "";
      if (!route.query["price"] && priceValue.value[0] > 0 && priceValue.value[1] > 0) {
        priceValue.value = props.prop_prices;
      }
      if (!route.query["kms"] && kmsValue.value[0] > 0 && kmsValue.value[1] > 0) {
        kmsValue.value = props.prop_kms;
      }
    };

    const applyFilter = (
      type: string,
      value: string,
      functionality: string
    ) => {
      if (functionality == "push") {
        value = value.toString();
        let explodedParamsQuerty =
          paramsQuery.value[type].length > 0
            ? paramsQuery.value[type].split(",")
            : [];
        if (explodedParamsQuerty.includes(value.toString())) {
          explodedParamsQuerty = explodedParamsQuerty.filter((e) => e != value);
        } else {
          explodedParamsQuerty.push(value);
        }
        paramsQuery.value[type] = explodedParamsQuerty.toString();
      } else if (functionality == "range") {
        if (type == "price") {
          {
            [priceFrom.value, priceTo.value] = value.split(",");
            priceFrom.value = formatTooltip(priceFrom.value);
            priceTo.value = formatTooltip(priceTo.value);
            paramsQuery.value.price = value.replace(",", "-");
          }
        }
        if (type == "kms") {
          {
            [kmsFrom.value, kmsTo.value] = value.split(",");
            kmsFrom.value = formatTooltip(kmsFrom.value);
            kmsTo.value = formatTooltip(kmsTo.value);
            paramsQuery.value.kms = value.replace(",", "-");
          }
        }
      }
      router.replace({
        ...router.currentRoute,
        query: Object.fromEntries(
          Object.entries(paramsQuery.value).filter(([_, v]) => v != "")
        ),
      });
    };

    

    const resetFilter = () => {
      paramsQuery.value = {
        year: "",
        model: "",
        brand: "",
        type: "",
        fuel: "",
        transmission: "",
        price: "",
        state: "",
        city: "",
        search: "",
        colorex: "",
        colorin: "",
        agency: "",
        kms: "",
      };
      router.replace({
        ...router.currentRoute,
        query: Object.fromEntries(
          Object.entries(paramsQuery.value).filter(([_, v]) => v != "")
        ),
      });
    };

    const formatTooltip = (val) => {
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return "$ " + val;
    };

    const formatPrice = (value) => {
      const formatter = new Intl.NumberFormat("en-US", {
      
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
    return formatter.format(value)
    };

    const handleSearchRange = (rangeMin, rangeMax, type) => {
      if (type == "price") {
        
        const priceMin = rangeMin == null ? Math.trunc(props.prop_prices[0]) : rangeMin;
        
        const selectMin = priceValue.value[0];
        const priceMax = rangeMax == null ? Math.trunc(props.prop_prices[1]) : rangeMax;
        const selectMax = priceValue.value[1];

        priceValue.value = [
          priceMin === Math.trunc(props.prop_prices[0]) ? selectMin : priceMin,
          priceMax === Math.trunc(props.prop_prices[1]) ? selectMax : priceMax,
        ];
        applyFilter("price", priceValue.value.toString(), "range");
      }
      if (type == "kms") {
        const kmsMin = rangeMin == null ? Math.trunc(props.prop_kms[0]) : rangeMin;
        const selectMin = kmsValue.value[0];
        const kmsMax = rangeMax == null ? Math.trunc(props.prop_kms[1]) : rangeMax;
        const selectMax = kmsValue.value[1];
        kmsValue.value = [
          kmsMin === Math.trunc(props.prop_kms[0]) ? selectMin : kmsMin,
          kmsMax === Math.trunc(props.prop_kms[1]) ? selectMax : kmsMax,
        ];
        applyFilter("kms", kmsValue.value.toString(), "range");
      }
    };

       

    watch(
      () =>  props.prop_prices,
      (val : any) => {
        priceValue.value[0] === 0 ? inputMin.value = formatPrice(val[0])  : inputMin.value = formatPrice(priceValue.value[0]);
        priceValue.value[1] === 0 ? inputMax.value = formatPrice(val[1])  : inputMax.value = formatPrice(priceValue.value[1]);
        rangeValuePrice.value = [parseInt(inputMin.value.replace(/[,]/g,'')), parseInt(inputMax.value.replace(/[,]/g,''))];
        limitsValuesPrice.value = val;
        console.log("🚀 ~ file: Filters.vue ~ line 1645 ~ setup ~ val", val)
      }
    );
    
    const listenerMin =(val, type) => {
      console.log("🚀 ~ file: Filters.vue ~ line 1661 ~ listenerMin ~ val", val)
      inputMin.value = formatPrice(val);
    }
    const listenerMax = (val, type) => {
      inputMax.value = formatPrice(val);
      console.log("🚀 ~ file: Filters.vue ~ line 1666 ~ listenerMax ~ val", val)
    }

    const debounceInput = _.debounce( () => {
      console.log("debounce", inputMin.value.replace(/[,]/g,''));

      if( 
        (parseInt(inputMin.value.replace(/[,]/g,'')) >= limitsValuesPrice.value[0] && parseInt(inputMin.value.replace(/[,]/g,'')) <= rangeValuePrice.value[1]) &&
        (parseInt(inputMax.value.replace(/[,]/g,'')) >= rangeValuePrice.value[0]  && parseInt(inputMax.value.replace(/[,]/g,'')) <= limitsValuesPrice.value[1])
      ){
      console.log("🚀 ~ file: Filters.vue ~ line 1659 ~ debounceInput ~ inputMin.value", [inputMin.value, inputMax.value])
      console.log("🚀 ~ file: Filters.vue ~ line 1659 ~ debounceInput ~ rangeValuePrice.value[0]", limitsValuesPrice.value)
      
        handleSearchRange(inputMin.value, inputMax.value, "price");
      }
      
        
      
    
      console.log("🚀 ~ file: Filters.vue ~ line 1617 ~ debounceInput ~ inputMin.value", inputMin.value)
    }, 400);

    const activeFilter = (id) => {
      const idfilter = id;
      emit("filterActive", idfilter);
    };
    const deleteFilter = (active) => {
      emit("deleteFilter", active);
    };
    const orderOpcions = (order) => {
      emit("orderActive", order);
      orderby.value = order;
      bootstrap.Modal.getInstance(
          document.getElementById("modal_order")
        ).hide();
    };

    const searchedBrands = computed(() => {
      console.log("p", props);
      return props.prop_brands?.filter((y: any) => {
        return y?.name.toLowerCase().includes(searchBrand.value.toLowerCase());
      });
    });
    const searchedModels = computed(() => {
      console.log("p", props.prop_models);
      return props.prop_models?.filter((y: any) => {
        return y?.name.toLowerCase().includes(searchModel.value.toLowerCase());
      });
    });
    const searchedStates = computed(() => {
      return props.prop_locations?.filter((y: any) => {
        return y?.name.toLowerCase().includes(searchState.value.toLowerCase());
      });
    });
    const searchedCities = computed(() => {
      return props.prop_cities?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchedTransmitions = computed(() => {
      return props.prop_trans?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchedTypes = computed(() => {
      return props.prop_type?.filter((y: any) => {
        return y?.name.toLowerCase().includes(searchType.value.toLowerCase());
      });
    });
    const searchedTypesFuel = computed(() => {
      return props.prop_fuel?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchedColorExt = computed(() => {
      return props.prop_colorex?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchedColorInt = computed(() => {
      return props.prop_colorin?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchedAgenciesInt = computed(() => {
      return props.prop_agencies?.filter((y: any) => {
        return y?.name.toLowerCase();
      });
    });
    const searchPrice = computed(() => {
      return props.prop_prices?.map((y: any) => {
        return Math.trunc(y);
      });
    });
    const searchKms = computed(() => {
      return props.prop_kms?.map((y: any) => {
        return Math.trunc(y);
      });
    });

    return {
      years,
      searchedBrands,
      searchedModels,
      searchedAgenciesInt,
      searchBrand,
      searchModel,
      searchPrice,
      searchKms,
      applyFilter,
      resetFilter,
      paramsQuery,
      priceValue,
      kmsValue,
      searchType,
      searchedTypes,
      type,
      priceFrom,
      priceTo,
      handleSearchRange,
      formatTooltip,
      transmissions,
      transmission,
      fuel,
      fuelModel,
      locationsModel,
      locations,

      searchState,
      searchedStates,
      searchedCities,
      cityModel,
      searchedTransmitions,
      searchedTypesFuel,
      searchedColorExt,
      searchedColorInt,
      activeFilter,
      filtersActive,
      deleteFilter,
      Clear,
      orderOpcions,
      orderby,
      inputMin,
      inputMax,
      listenerMin,
      listenerMax,
      debounceInput,
      rangeValuePrice,
      limitsValuesPrice,
      formatPrice
    };
  },
  emits: ["filterActive", "deleteFilter", "orderActive"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Filters";
@import "@/assets/styles/components/Input";
</style>
