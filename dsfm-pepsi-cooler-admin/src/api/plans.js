import axiosInstance from "../utils/axios";
import { convertQueryString } from "../utils/helpers";

const export_list_api = (query) => {
  const path = "/admin/exports/plans/?" + convertQueryString(query);
  const config = {
    timeout: 600000,
  };

  return axiosInstance.get(path, config);
};

const get_list_api = (query) => {
  const path = "/admin/plans/?" + convertQueryString(query);

  return axiosInstance.get(path);
};

const delete_api = (id) => {
  const path = `/admin/plans/${id}/`;

  return axiosInstance.delete(path);
};

const create_api = (data) => {
  const path = "/admin/plans/";

  return axiosInstance.post(path, data);
};

const get_detail_api = (id) => {
  const path = `/admin/plans/${id}/`;

  return axiosInstance.get(path);
};

const update_api = (data, type = "PUT") => {
  const path = `/admin/plans/${data.id}/`;

  if (type === "PUT") {
    return axiosInstance.patch(path, data);
  }

  return axiosInstance.patch(path, data);
};

const get_image_files_api = (id, query) => {
  let path = `/admin/plans/${id}/image-files/?` + convertQueryString(query);

  return axiosInstance.get(path);
};

const rotate_image_api = ({ plan_sid, plan_file_id, data }) => {
  const path = `/admin/plans/${plan_sid}/image-files/${plan_file_id}/rotation/`;

  return axiosInstance.post(path, data);
};

const create_image_files_api = ({ plan_sid, data }) => {
  const path = `/admin/plans/${plan_sid}/image-files/`;

  return axiosInstance.post(path, data);
};

const get_forms_api = (id, query) => {
  let path = `/admin/plans/${id}/forms/?` + convertQueryString(query);

  return axiosInstance.get(path);
};

const get_data_api = (id) => {
  const path = `/admin/plans/${id}/data/`;

  return axiosInstance.get(path);
};

const get_structure_api = () => {
  const path = `/admin/json-structures/1/`;
  return axiosInstance.get(path);
};

const get_plan_api = ({ provinceCode, districtCode }) => {
  let url = "/public/locations/countries/VNM/provinces/";
  if (provinceCode) {
    url = `/public/locations/countries/VNM/provinces/${provinceCode}/districts/`;
  }
  if (provinceCode && districtCode) {
    url = `/public/locations/countries/VNM/provinces/${provinceCode}/districts/${districtCode}/wards/`;
  }
  return axiosInstance.get(url);
};

const update_plan_api = ({ plan_sid, ...data }) => {
  const path = `/admin/plans/${plan_sid}/`;

  return axiosInstance.patch(path, data);
};

const create_plan_data_api = ({ plan_sid, data }) => {
  const path = `/admin/plans/${plan_sid}/data/`;

  return axiosInstance.post(path, data);
};

const upload_plan_image_api = (plan_sid, data) => {
  const path = `/admin/plans/${plan_sid}/image-files/`;

  return axiosInstance.post(path, data);
};

export {
  export_list_api,
  get_list_api,
  delete_api,
  create_api,
  get_detail_api,
  update_api,
  get_image_files_api,
  rotate_image_api,
  create_image_files_api,
  get_forms_api,
  get_data_api,
  get_structure_api,
  get_plan_api,
  update_plan_api,
  create_plan_data_api,
  upload_plan_image_api,
};
