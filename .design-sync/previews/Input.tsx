import { Input } from "yoga-by-delphine";

export const Default = () => <Input placeholder="Votre adresse e-mail" />;

export const Filled = () => <Input defaultValue="delphine@example.com" />;

export const Disabled = () => (
  <Input placeholder="Champ indisponible" disabled />
);
