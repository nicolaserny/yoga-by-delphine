import { Label, Input } from "yoga-by-delphine";

export const WithInput = () => (
  <div>
    <Label htmlFor="email">Adresse e-mail</Label>
    <Input id="email" type="email" placeholder="vous@example.com" />
  </div>
);

export const Standalone = () => <Label>Nom complet</Label>;
