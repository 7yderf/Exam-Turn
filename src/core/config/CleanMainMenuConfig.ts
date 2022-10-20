const DocMenuConfig = [
  {
    heading: "",
    route: "/apps",
    show: true,
    pages: [
      {
        heading: "Inicio",
        route: "/dashboard",
        svgIcon: "",
        fontIcon: "isax-home",
        permission: null,
      },
    ],
  },
  {
    heading: "Corporativo",
    route: "/others",

    show: false,
    pages: [
      {
        heading: "Calendario",
        route: "/calendario",
        svgIcon: "",
        fontIcon: "isax-calendar-1",
        permission: "Ver calendario",
      },
      {
        heading: "Avalúos a domicilio",
        route: "/appraisals",
        svgIcon: "",
        fontIcon: "isax-receipt-item",
        permission: "Ver listado de avalúos",
      },
    ],
  },
  {
    heading: "Gestión de agencias",
    route: "/apps",
    show: true,
    pages: [
      {
        heading: "Agencias",
        route: "/agencies",
        svgIcon: "",
        fontIcon: "isax-shop",
        permission: "Ver listado de agencias",
      },
      {
        heading: "Vehículos",
        route: "/vehicles",
        svgIcon: "",
        fontIcon: "isax-car",
        permission: "Ver listado de vehículos",
      },
      {
        heading: "Apartados",
        route: "/apartados",
        svgIcon: "",
        fontIcon: "isax-receipt-2-1",
        permission: "Ver listado de vehículos", //Cambiar permiso
      },
      {
        heading: "Citas",
        route: "/citas",
        svgIcon: "",
        fontIcon: "isax-clock",
        permission: "Ver listado de citas",
      },
      {
        heading: "Avalúos",
        route: "/avaluos",
        svgIcon: "",
        fontIcon: "isax-receipt-item",
        permission: "Ver listado de avalúos",
      },
      {
        heading: "Avalúos",
        route: "/appraisals",
        svgIcon: "",
        fontIcon: "isax-receipt-item",
        permission: "Ver listado de avalúos en agencia",
      },
      {
        heading: "Avalúos",
        route: "/appraisals",
        svgIcon: "",
        fontIcon: "isax-receipt-item",
        permission: "Ver listado de avalúos a domicilio",
      },
      {
        heading: "Leads",
        route: "/leads",
        svgIcon: "",
        fontIcon: "isax-personalcard",
        permission: "Ver listado de leads",
      },
      
    ],
  },
  {
    heading: "Colaboradores",
    route: "/colaboradores",
    show: true,
    pages: [
      {
        heading: "Usuarios",
        route: "/users",
        svgIcon: "",
        fontIcon: "isax-profile-2user",
        permission: "Ver listado de usuarios",
      },
      {
        heading: "Roles y permisos",
        route: "/roles",
        svgIcon: "",
        fontIcon: "isax-crown-1",
        permission: "Ver listado de roles",
      },
    ],
  },
  {
    heading: "OTROS",
    route: "/others",
    show: true,
    pages: [
      {
        heading: "Configuración",
        route: "/config",
        svgIcon: "",
        fontIcon: "isax-setting-2",
        permission: "Editar correo del sitio",
      },
    ],
  },
];

export default DocMenuConfig;
