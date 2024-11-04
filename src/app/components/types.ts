import { UseFormRegister } from "react-hook-form";
import { Vector3, Euler, Color } from "three";

export interface CubeSetting {
  title: string;
  colorStart: string;
  colorEnd: string;
}

export interface CubeData extends CubeSetting {
  position: [number, number, number];
}

export interface CubeProps {
  title: string;
  widthFactor?: number;
  position?: Vector3;
  colorStart: string;
  colorEnd: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  github?: string;
  link?: string;
  index: number;
}

export interface KeyFrame {
  offset: number;
  position: Vector3;
  rotation: Euler;
  color: Color;
}

export interface StackBarProps {
  skills: string[];
  className?: string;
}

export interface InputFieldProps {
  id: 'name' | 'email' | 'message';
  type: string;
  register: UseFormRegister<FormDataProps>;
  placeholder?: string;
  registerOptions?: object;
  errors?: { [key: string]: { message: string } };
  disabled?: boolean;
}

export interface FormDataProps {
  name: string;
  email: string;
  message: string;
  submitStatus: 'idle' | 'success' | 'error' | 'loading'
}