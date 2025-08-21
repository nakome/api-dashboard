import React, { useState, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import {
  Home as HomeIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  Plus as PlusIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  List as ListIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Laptop as LaptopIcon,
  Settings as SettingsIcon,
} from "lucide-react";

// Incluir @custom-variant dark (&:where(.dark, .dark *)); en el css

// Clase ApiClient genérica para interactuar con la API REST
class ApiClient {
  constructor(baseUrl, token = null) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    try {
      const headers = {
        ...options.headers,
      };

      if (this.token) {
        headers["Authorization"] = this.token;
      }

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          errorData = { message: response.statusText };
        }
        throw new Error(
          `HTTP error! Status: ${response.status}. Message: ${errorData.message || "No message provided."}`,
        );
      }

      if (response.status === 204) {
        return null;
      }

      const text = await response.text();
      return text ? JSON.parse(text) : {};
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  // Métodos genéricos para cualquier entidad
  getCollections() {
    return this.request("/");
  }

  getCollection(entity, params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/${entity}${query ? "?" + query : ""}`);
  }

  getItem(entity, id, params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/${entity}/${id}${query ? "?" + query : ""}`);
  }

  createItem(entity, data) {
    return this.request(`/${entity}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  updateItem(entity, id, data, partial = false) {
    const endpoint = id !== null ? `/${entity}/${id}` : `/${entity}`;

    return this.request(endpoint, {
      method: partial ? "PATCH" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  deleteItem(entity, id) {
    return this.request(`/${entity}/${id}`, { method: "DELETE" });
  }
}

// URL base de la API
const API_BASE_URL = "https://monchovarela.es/_proyectos/api/v6/api";
const apiClient = new ApiClient(API_BASE_URL);

// Componente para la notificación
const Notification = ({ message, type, onClose }) => {
  const bgColor = type === "success" ? "border-green-500" : "border-red-500";
  return createPortal(
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`${bgColor} bg-slate-800 border-l-6 text-white p-4 rounded-sm shadow-lg flex items-center space-x-4 animate-fade-in-up transition-transform duration-300 transform-gpu`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="text-white opacity-75 hover:opacity-100"
        >
          <XIcon size={20} />
        </button>
      </div>
    </div>,
    document.body,
  );
};

// Componente para la ventana modal
const Modal = ({ title, onClose, children }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/85 bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl w-full max-w-lg mx-4 animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white relative">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
          >
            <XIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

// Componente genérico para formularios
const DynamicForm = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => {
  const renderInput = (key, value) => {
    const type = typeof value === "number" ? "number" : "text";
    if (["description", "text", "bio"].includes(key)) {
      return (
        <textarea
          key={key}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={formData[key] || ""}
          onChange={handleChange}
          rows="2"
          className="col-span-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      );
    } else if (typeof value === "boolean") {
      return (
        <div key={key} className="flex items-center col-span-2">
          <input
            type="checkbox"
            name={key}
            checked={!!formData[key]}
            onChange={(e) =>
              handleChange({ target: { name: key, value: e.target.checked } })
            }
            className="mr-2"
          />
          <label className="text-slate-700 dark:text-slate-300">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        </div>
      );
    } else if (["image", "url"].includes(key)) {
      return (
        <input
          key={key}
          type="url"
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={formData[key] || ""}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      );
    } else if (key === "email") {
      return (
        <input
          key={key}
          type="email"
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={formData[key] || ""}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      );
    } else {
      return (
        <input
          key={key}
          type={type}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={formData[key] || ""}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      );
    }
  };

  const keys = Object.keys(formData).filter((k) => k !== "id");

  return (
    <form onSubmit={handleSubmit}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
        {keys.map((key) => renderInput(key, formData[key]))}
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-slate-900 text-white font-semibold rounded-full shadow-md hover:bg-slate-800 transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};

const EntityList = ({
  entityName,
  items,
  handleOpenModal,
  handleDelete,
  isSubmitting,
  page,
  limit,
  sort,
  order,
  setPage,
  setLimit,
  setSort,
  setOrder,
}) => {
  // Ahora las opciones de ordenación se generan dinámicamente
  const getSortOptions = () => {
    if (!items || items.length === 0) {
      return ["id"];
    }
    const firstItem = items[0];
    const keys = Object.keys(firstItem).filter(
      // Filtramos las claves que no son de tipo primitivo
      (k) => typeof firstItem[k] !== "object" && !Array.isArray(firstItem[k]),
    );
    return ["id", ...keys];
  };

  const currentSortOptions = getSortOptions();

  const renderDefaultCard = (item) => {
    const keys = Object.keys(item).filter(
      (k) =>
        k !== "id" && typeof item[k] !== "object" && !Array.isArray(item[k]),
    );
    return (
      <div
        key={item.id}
        className="border-t-5 p-5 rounded-sm shadow-md border-slate-500 bg-white dark:bg-gray-800"
      >
        <h3 className="text-xl font-bold mb-2 leading-tight text-slate-900 dark:text-white">
          ID: {item.id}
        </h3>
        {keys.map((key) => (
          <p
            key={key}
            className="truncate text-sm text-slate-600 dark:text-slate-300 break-words"
          >
            <span className="font-semibold">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>{" "}
            {String(item[key])}
          </p>
        ))}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => handleOpenModal(entityName, item)}
            className="px-3 py-2 text-xs bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center"
          >
            <EditIcon size={14} className="mr-2" /> Editar
          </button>
          <button
            onClick={() => handleDelete(entityName, item.id)}
            className="px-3 py-2 text-xs bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center"
            disabled={isSubmitting}
          >
            <Trash2Icon size={14} className="mr-2" /> Eliminar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          {entityName.charAt(0).toUpperCase() + entityName.slice(1)}
        </h2>
        <div className="text-sm text-right">
          <a
            href={
              API_BASE_URL + "/" + entityName.charAt(0) + entityName.slice(1)
            }
            target="_blank"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
          >
            Ver en la API
          </a>
        </div>
      </div>
      {/* Controles de filtro y paginación */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          onClick={() => handleOpenModal(entityName)}
          className="px-6 py-2 bg-slate-900 text-white font-semibold rounded-full shadow-md hover:bg-slate-600 transition-colors duration-300 flex items-center"
        >
          <PlusIcon size={20} className="mr-2" /> Crear Nuevo
        </button>

        <div className="flex items-center justify-center gap-3">
          {/* Select para el límite */}
          <div className="flex items-center gap-2">
            <label className="hidden lg:inline-flex text-slate-700 dark:text-slate-300  text-sm font-semibold">
              Límite:
            </label>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          {/* Select para la ordenación */}
          {currentSortOptions.length > 0 && (
            <div className="flex items-center gap-2">
              <label className="hidden lg:inline-flex text-slate-700 dark:text-slate-300 text-sm font-semibold">
                Ordenar:
              </label>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {currentSortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Botón para el orden */}
          <button
            onClick={() => {
              setOrder(order === "asc" ? "desc" : "asc");
              setPage(1);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {order === "asc" ? "ASC" : "DESC"}
          </button>
        </div>
      </div>

      {/* Listado de ítems */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {items.length > 0 ? (
          items.map(renderDefaultCard)
        ) : (
          <p className="col-span-full text-center text-slate-500 dark:text-slate-400">
            No se encontraron ítems.
          </p>
        )}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white disabled:opacity-50 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          Anterior
        </button>
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Página {page}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={items.length < limit}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white disabled:opacity-50 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [collections, setCollections] = useState([]);
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [notification, setNotification] = useState(null);
  const [activeView, setActiveView] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // NUEVOS ESTADOS PARA PAGINACIÓN Y FILTROS
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("id");
  const [order, setOrder] = useState("desc");

  // NUEVO ESTADO PARA EL TEMA
  const [theme, setTheme] = useState("system");

  // Función para aplicar la clase 'dark' al <html>
  const applyTheme = (currentTheme) => {
    const root = window.document.documentElement;
    const isDark =
      currentTheme === "dark" ||
      (currentTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  };

  // Hook para gestionar el tema del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  // Hook para actualizar el tema cuando cambia el estado
  useEffect(() => {
    if (theme) {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Función para mostrar notificaciones
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    localStorage.setItem("auth_token", token);
    apiClient.setToken(token);
    setIsAuthenticated(true);
    setIsAuthenticating(false);
    showNotification("¡Autenticación exitosa!", "success");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    apiClient.setToken(null);
    setIsAuthenticated(false);
    setCollections([]);
    setData({});
    setProfile({});
    setActiveView("");
    showNotification("Sesión cerrada.", "success");
  };

  // Función para obtener las entidades disponibles
  const getAvailableCollections = async () => {
    setLoading(true);
    setError(null);
    try {
      const entities = await apiClient.getCollections();
      const collectionNames = entities.filter((e) => e !== "profile");
      setCollections(collectionNames);
      if (!activeView && collectionNames.length > 0) {
        setActiveView(collectionNames[0]);
      }
    } catch (err) {
      console.error("Error al obtener colecciones:", err);
      setError(
        "Error al obtener las colecciones. Asegúrate de que el servidor PHP esté en ejecución y accesible.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Nueva función para obtener los datos de la colección activa con filtros
  const fetchActiveCollectionData = async () => {
    if (!activeView) return;
    setLoading(true);
    setError(null);
    try {
      if (activeView === "profile") {
        const profileData = await apiClient.getCollection("profile", {});
        setProfile(profileData);
      } else {
        const params = {
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        };
        const result = await apiClient.getCollection(activeView, params);
        setData((prevData) => ({ ...prevData, [activeView]: result }));
      }
    } catch (err) {
      console.error(`Error fetching data for ${activeView}:`, err);
      setError(`Error al cargar los datos para ${activeView}.`);
      showNotification(
        `Error al cargar los datos para ${activeView}.`,
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleViewChange = (view) => {
    setActiveView(view);
    setPage(1);
    setLimit(10);
    setSort("id");
    setOrder("desc");
    setIsSidebarOpen(false);
  };

  const handleDelete = async (entity, id) => {
    // Reemplazamos window.confirm con un modal
    showConfirmationModal(
      "¿Estás seguro de que quieres eliminar este elemento?",
      async () => {
        setIsSubmitting(true);
        try {
          await apiClient.deleteItem(entity, id);
          showNotification(`Ítem eliminado de ${entity}.`, "success");
          fetchActiveCollectionData();
        } catch (err) {
          showNotification("Error al eliminar el ítem.", "error");
        } finally {
          setIsSubmitting(false);
        }
      },
    );
  };

  const showConfirmationModal = (message, onConfirm) => {
    setShowModal(true);
    setModalType("confirm");
    setFormData({ message, onConfirm });
  };

  const handleConfirm = () => {
    if (formData.onConfirm) {
      formData.onConfirm();
    }
    handleCloseModal();
  };

  const handleOpenModal = (entity, item = null) => {
    const type = item ? "edit" : "create";
    setModalType(type);
    setEditingItem(item);

    if (item) {
      setFormData(item);
    } else {
      const currentCollectionData = data[entity];
      if (currentCollectionData && currentCollectionData.length > 0) {
        const firstItem = currentCollectionData[0];
        const dynamicFormState = Object.keys(firstItem).reduce((acc, key) => {
          if (key !== "id") {
            if (typeof firstItem[key] === "number") {
              acc[key] = 0;
            } else if (typeof firstItem[key] === "boolean") {
              acc[key] = false;
            } else {
              acc[key] = "";
            }
          }
          return acc;
        }, {});
        setFormData(dynamicFormState);
      } else {
        setFormData({});
      }
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType("");
    setEditingItem(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (modalType === "create") {
        await apiClient.createItem(activeView, formData);
        showNotification(`Ítem creado en ${activeView}.`, "success");
      } else {
        await apiClient.updateItem(activeView, editingItem.id, formData);
        showNotification(`Ítem actualizado en ${activeView}.`, "success");
      }
      fetchActiveCollectionData(); // Recargar los datos después de la operación
      handleCloseModal();
    } catch (err) {
      showNotification("Error al guardar el ítem.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      apiClient.setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      getAvailableCollections();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && activeView) {
      fetchActiveCollectionData();
    }
  }, [isAuthenticated, activeView, page, limit, sort, order]);

  const renderView = () => {
    if (loading)
      return (
        <div className="text-center py-10 text-slate-500">Cargando...</div>
      );
    if (error)
      return (
        <div className="text-center py-10 text-red-500 font-bold">{error}</div>
      );

    if (activeView === "profile") {
      return (
        <div className="p-2">
          <h2 className="text-3xl font-bold mb-6 gap-3 flex items-center">
            <SettingsIcon className="mr-3" /> Perfil
          </h2>
          {profile && (
            <Fragment>
              {Object.keys(profile).map((key) => (
                <div
                  key={key}
                  className="bg-slate-100 dark:bg-slate-700 rounded-md p-6 shadow-inner text-sm text-slate-600 dark:text-slate-300 break-words mb-2"
                >
                  <span className="font-bold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>{" "}
                  {String(profile[key])}
                </div>
              ))}
            </Fragment>
          )}
        </div>
      );
    }

    if (data[activeView]) {
      return (
        <EntityList
          entityName={activeView}
          items={data[activeView]}
          handleOpenModal={handleOpenModal}
          handleDelete={handleDelete}
          isSubmitting={isSubmitting}
          page={page}
          limit={limit}
          sort={sort}
          order={order}
          setPage={setPage}
          setLimit={setLimit}
          setSort={setSort}
          setOrder={setOrder}
        />
      );
    }

    return (
      <div className="text-center py-10 text-slate-500">
        Selecciona una entidad de la barra lateral.
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
        <div className="w-full max-w-sm p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="token"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Token de Seguridad
              </label>
              <input
                type="text"
                id="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                placeholder="Ingresa tu token aquí..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isAuthenticating ? "Autenticando..." : "Ingresar"}
            </button>
          </form>
        </div>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`${isSidebarOpen ? "hidden" : ""} md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg`}
      >
        <MenuIcon size={24} />
      </button>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-60 bg-slate-800 shadow-xl`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h1 className="text-2xl font-bold text-slate-100">Panel</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <XIcon size={24} />
            </button>
          </div>
          <div className="hidden md:block">
            <h1 className="text-3xl font-bold text-slate-100 mb-8">Panel</h1>
          </div>
          {/* Nuevo: Selector de Tema */}
          <div className="mb-8">
            <div className="flex justify-between gap-2 p-1 bg-slate-700 rounded-full">
              <button
                onClick={() => setTheme("light")}
                className={`w-1/3 p-2 rounded-full transition-colors duration-200 ${theme === "light" ? "bg-white text-slate-900 shadow-lg" : "text-slate-300 hover:text-white"}`}
                title="Modo Claro"
              >
                <SunIcon size={20} className="mx-auto" />
              </button>
              <button
                onClick={() => setTheme("system")}
                className={`w-1/3 p-2 rounded-full transition-colors duration-200 ${theme === "system" ? "bg-white text-slate-900 shadow-lg" : "text-slate-300 hover:text-white"}`}
                title="Sistema"
              >
                <LaptopIcon size={20} className="mx-auto" />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`w-1/3 p-2 rounded-full transition-colors duration-200 ${theme === "dark" ? "bg-slate-900 text-white shadow-lg" : "text-slate-300 hover:text-white"}`}
                title="Modo Oscuro"
              >
                <MoonIcon size={20} className="mx-auto" />
              </button>
            </div>
          </div>
          {/* Entidades */}
          <nav className="flex-grow">
            <h2 className="text-lg font-semibold text-slate-400 uppercase mb-4">
              Entidades
            </h2>
            <ul className="space-y-2 text-white">
              <li className="list-none">
                <button
                  onClick={() => handleViewChange("profile")}
                  className={`w-full text-left flex items-center p-3 rounded-md transition-colors duration-200 ${activeView === "profile" ? "bg-blue-600 text-white shadow-md" : "hover:bg-slate-700"}`}
                >
                  <HomeIcon className="mr-3" /> Perfil
                </button>
              </li>
              {collections.map((collection) => (
                <li key={collection} className="list-none">
                  <button
                    onClick={() => handleViewChange(collection)}
                    className={`w-full text-left flex items-center p-3 rounded-md transition-colors duration-200 ${activeView === collection ? "bg-blue-600 text-white shadow-md" : "hover:bg-slate-700"}`}
                  >
                    <ListIcon className="mr-3" />{" "}
                    {collection.charAt(0).toUpperCase() + collection.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Logout */}
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="w-full text-left flex items-center p-3 mt-6 rounded-md transition-colors duration-200 text-white hover:bg-slate-700"
            >
              <LogOutIcon className="mr-3" /> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 p-4 bg-white dark:bg-slate-700">
        {renderView()}
      </main>

      {showModal && (
        <Modal
          title={
            modalType === "confirm"
              ? formData.message
              : editingItem
                ? `Editar ${activeView.charAt(0).toUpperCase() + activeView.slice(1)}`
                : `Crear ${activeView.charAt(0).toUpperCase() + activeView.slice(1)}`
          }
          onClose={handleCloseModal}
        >
          {modalType === "confirm" ? (
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-slate-200 text-slate-900 font-semibold rounded-full hover:bg-slate-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors"
              >
                Confirmar
              </button>
            </div>
          ) : (
            <DynamicForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </Modal>
      )}

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default App;
