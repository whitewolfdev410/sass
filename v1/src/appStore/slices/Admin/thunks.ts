import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AdminSignupType, OWNER, ProviderSignupType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (
    formData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post(`auth/token`, {
        ...formData,
        provider: null,
      });
      return res.data;
    } catch (err: any) {
      console.error("user login error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminSignup = createAsyncThunk(
  "admin/signup",
  async (data: AdminSignupType, { rejectWithValue }) => {
    try {
      await USER_CLIENT.post(`admin/signup`, data);
      return "success";
    } catch (err: any) {
      console.error("admin signup error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const inviteAdminCoworker = createAsyncThunk(
  "admin/inviteCoworker",
  async (formData: { email: string }, { rejectWithValue }) => {
    try {
      console.log(USER_CLIENT.defaults.headers);
      const res = await USER_CLIENT.post("/admin/invite", {
        ...formData,
        role: OWNER,
      });
      return res.data;
    } catch (err: any) {
      console.error("invite admin coworker error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyAdminInviteCode = createAsyncThunk(
  "admin/verifyInvite",
  async (
    formData: {
      email: string;
      invitationCode: string;
      providerId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post("/admin/verifyinvite", formData);
      console.log("verify provider invite code success", res.data);
      return res.data;
    } catch (err: any) {
      console.error("verify invite error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAdminProfile = createAsyncThunk(
  "adminProvider/getProfile",
  async (
    data: { providerId: string; persona: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post("/admin/profile", data);
      return res.data;
    } catch (err: any) {
      console.error("get admin profile error", err);
      rejectWithValue(err.response.data);
    }
  }
);

export const createProviderAccount = createAsyncThunk(
  "admin/createProviderAccount",
  async (formData: ProviderSignupType, { rejectWithValue }) => {
    try {
      const res = await USER_CLIENT.post("/providers", formData);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
