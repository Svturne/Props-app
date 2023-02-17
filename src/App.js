import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <ProfileComponent
        firstName="Jhon"
        lastName="Doe"
        bio="John Doe est un individu mystérieux dont l'identité est inconnue. Il est souvent utilisé comme nom fictif pour représenter une personne dont l'identité doit rester confidentielle. On ne connaît donc pas grand-chose sur lui, si ce n'est qu'il est de sexe masculin et qu'il est souvent utilisé comme exemple dans les procédures judiciaires pour désigner une personne dont l'identité n'a pas été révélée. Le nom John Doe est également utilisé dans l'industrie cinématographique pour représenter un personnage non identifié ou sans nom."
        profession="Développer"
      />
    </div>
  );
}

export default App;
