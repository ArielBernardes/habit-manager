import { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {

  const [showActivities, setShowActivities] = useState([]);
  const [activity, setActivity] = useState([]);

  const CreateActivity = (data) => {
    api
      .post("activities/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => toast.success('Activity created'))
      .catch((err) => console.log(err));
  };

  const LoadActivities = (id) => {
    api
      .get(`activities/?group=${id}&page=1`)
      .then((response) => setShowActivities(response.data.results))
      .catch(() => toast.error('Failed to load activities'));
  };

  const UpdateActivity = (data) => {
    const { id, title } = data;
    api
      .patch(
        `activities/${id}/`,
        {
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then(() => toast.success('Activity updated'))
      .catch(() => toast.error('Failed to update'));
  };

  const DeleteActivity = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then(() => toast.success('Activity deleted'))
      .catch(() => toast.error('Failed to delete'));
  };

  const SpecificActivity = (id) => {
    api
      .get(`activities/${id}/`)
      .then((response) => setActivity([response.data]));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        showActivities,
        activity,
        CreateActivity,
        LoadActivities,
        UpdateActivity,
        DeleteActivity,
        SpecificActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(ActivitiesContext);
