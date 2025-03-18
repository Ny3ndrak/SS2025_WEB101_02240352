const [user, setUser] = useState({
    name: "Nyendrak Yoezer Zangmo",
    bio: "Software-Engineering Student",
    avatar: "me.jpg",
    details: { location: "Bhutan", email: "john@example.com" }
  });
  const [editMode, setEditMode] = useState(false);
  
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    setEditMode(false);
  };
  