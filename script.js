const container = document.querySelector(".ProjectsSection")

for (const project of Projects) {
  const card = document
    .querySelector("[data-cardTemlate]")
    .content.cloneNode(true).children[0]
  const nameOfCard = card.querySelector(".nameOfcard")
  const image = card.querySelector(".img")
  const btnGit = card.querySelector(".btnGit")
  const btnTry = card.querySelector(".btnPages")
  const containerOFTechs = card.querySelector(".techsDiv")

  if (
    project.name === "CountriesDataVisualization" ||
    project.name === "CountriesListWithSorting" ||
    project.name === "BeehiveManagmentSystem"
  ) {
    if (project.name === "BeehiveManagmentSystem") {
      nameOfCard.textContent = "Beehive-ManagmentSys"
    } else if (project.name === "CountriesDataVisualization") {
      nameOfCard.textContent = "CountriesData-Visualization"
    } else if (project.name === "CountriesListWithSorting") {
      nameOfCard.textContent = "CountriesList-WithSorting"
    }
  } else {
    nameOfCard.textContent = project.name
  }
  image.src = `images/${project.name}.img.png`
  image.alt = `image of ${project.name}`
  btnGit.href = project.linkGit
  if (project.linkTry === "no") {
    btnTry.textContent = ""
  } else {
    btnTry.href = project.linkTry
  }
  if (project.react) {
    card.style.position = "relative"
    const spanReact = document.createElement("span")
    spanReact.innerHTML = '<i class="fa-brands fa-react"></i>'
    spanReact.style.color = "#03b1fc"
    spanReact.style.fontSize = "20px"
    spanReact.style.position = "absolute"
    spanReact.style.top = "5px"
    spanReact.style.left = "5px"
    card.appendChild(spanReact)
  }

  for (const tech of project.technologys) {
    const spanOfTech = document.createElement("span")
    spanOfTech.textContent = tech
    spanOfTech.classList.add("techSpan")
    containerOFTechs.appendChild(spanOfTech)
  }

  container.appendChild(card)
}
