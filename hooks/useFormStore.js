import { create } from "zustand";
    const emptyForm = {
      nameofcampaign: "",
      mainheading: "",
      subheading: "",
      backgroundimageurl: "",
      salebadge: "",
      saleheading: "",
      saledescription: "",
      sectiontitle: "",

      collectiononename: "",
      collectiononedescription: "",
      collectiononeimgurl: "",

      collectiontwoname: "",
      collectiontwodescription: "",
      collectiontwoimgurl: "",

      collectionthreename: "",
      collectionthreedescription: "",
      collectionthreeimgurl: "",

      collectionfourname: "",
      collectionfourdescription: "",
      collectionfourimgurl: ""
    };

const useFormStore = create((set) => ({
  formData: emptyForm,
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
      edit: !state.edit,
      formData: state.edit ? null : state.formData
    }))
}));

export default useFormStore;