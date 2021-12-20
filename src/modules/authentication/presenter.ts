import store from "@core/store/redux";
import { setToken } from "./profileStore";
import authenticationRepository, { ILoginDTO, ILoginOTP } from "./repository";

const authenticationPresenter = { ...authenticationRepository };

authenticationPresenter.login = async (
  payload: ILoginDTO,
  remember = false
) => {
  const token = await authenticationRepository.login(payload);
  store.dispatch(setToken({ token, remember }));
  return token;
};
authenticationPresenter.loginByOTPCode = async (payload: ILoginOTP) => {
  const remember = false;
  const token = await authenticationRepository.loginByOTPCode(payload);
  store.dispatch(setToken({ token, remember }));
  return token;
};

authenticationPresenter.verifyCode=async (code:string)=>{
  const token = await authenticationRepository.verifyCode(code);
  console.log(token);
  store.dispatch(setToken({ token, remember:false }));
}

export default authenticationPresenter;
