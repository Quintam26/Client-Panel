import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTERATION } from './types';

export const setDisableBalanceOnAdd = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.disableBalanceOnAdd = ! settings.disableBalanceOnAdd;

  //Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  }
};

export const setDisableBalanceOnEdit = () => {
    //Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings'));

    //Toggle
    settings.disableBalanceOnEdit = ! settings.disableBalanceOnEdit;
  
    //Set back to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  }
};

export const setAllowRegisteration = () => {
    //Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings'));

    //Toggle
    settings.allowRegisteration = ! settings.allowRegisteration;
  
    //Set back to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: ALLOW_REGISTERATION,
    payload: settings.allowRegisteration
  }
};