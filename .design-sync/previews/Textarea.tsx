import { Textarea } from "yoga-by-delphine";

export const Default = () => <Textarea placeholder="Votre message…" rows={4} />;

export const Filled = () => (
  <Textarea
    rows={4}
    defaultValue={
      "Bonjour Delphine,\n\nJe souhaiterais m'inscrire au cours du mardi soir."
    }
  />
);
