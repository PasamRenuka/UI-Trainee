export const CHAGNE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

const changeInputValue = (value) => ({
  type: CHAGNE_INPUT_VALUE,
  payload: value
});
export default changeInputValue