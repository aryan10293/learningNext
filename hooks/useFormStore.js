import { create } from "zustand";

const useFormStore = create((set) => ({
  formData: {},
  edit: false,

  setFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data
      }
    })),
    
  setEdit: () =>
    set((state) => ({
      edit: !state.edit
    }))
}));

export default useFormStore;