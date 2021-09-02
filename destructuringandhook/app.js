const user = {
  name: "Ash",
  lastName: "Ketchum",
  avatar:
    "https://i.pinimg.com/originals/62/e7/13/62e71368b711f43dc3ab967c1c6a17bb.jpg",
  bio: "Tengo 10 años y mi sueño es convertime en maestro pokemon. Actualmente viajo con Pikachu y Go.",
  city: "Pueblo Paleta",
  social: [150, 160, 130, 255],
};

function useState(initialState) {
  let value = initialState;

  function state() {
    return value;
  }
  function setState(newValue) {
    value = newValue;
  }

  return [state, setState];
}

function User({ name, lastName, avatar, city, bio: bioArg, social }) {
  const [twitter, facebook, instagram, tiktok] = social;

  const [age, setAge] = useState(10);

  function render() {
    const bio = bioArg.replace(10, age);

    return `
    <div class="user">
      <img src="${avatar}" alt="${name}" width="140" height="140">
      <div class="details">
        <p>${name} ${lastName} ${age()}</p>
      </div>
      <p class="city"><em>${city}</em></p>
      <div class="social">
        <p>
          ${twitter}
        </p>
        <p>
          ${facebook}
        </p>
        <p>
          ${instagram}
        </p>
        <p>
          ${tiktok}
        </p>
      </div>
      <div class="bio">
        <p>${bio}</p>
      </div>
    </div>
  `;
  }

  return {
    render,
    setAge,
  };
}

const ash = User(user);

window.update.addEventListener("click", () => {
  const newAge = window.prompt("what age have ash?", 10);
  ash.setAge(newAge);
  window.user.innerHTML = ash.render();
});

window.user.innerHTML = ash.render();
