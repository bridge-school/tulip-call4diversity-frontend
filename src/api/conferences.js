import { API_BASE_URL } from "./config";
import axios from "axios";

/**
 * API Calls related to the list of conferences on the home page
 */
const sanitizeValues = (values) => ({
  ...values,
  state: 'Ontario',
  submissionDueDate: '',
  country: 'Canada',
  eventDate: '',
  compensation: values.compensation === 'yes' ? true : false,
  codeOfConduct: values.codeOfConduct === 'yes' ? true : false,
  scholarship: values.scholarship === 'yes' ? true : false,
});

export default {
  getAll: () => axios.get(`${API_BASE_URL}/conference`),
  postSubmissionForm: (values) => {
    const data = sanitizeValues(values);
    var headers = {
      'Content-Type': 'multipart/form-data'
    }
    axios.post(`${API_BASE_URL}/conference`, data, headers);
    } 
};

