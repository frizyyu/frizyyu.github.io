document.getElementById('aboutMeButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.scene').style.transform = 'translateX(-100%)';
    document.querySelector('.second-scene').style.transform = 'translateX(0)';
    document.getElementById('secondSceneHeading').textContent = 'About me:';
document.getElementById('secondSceneText').innerHTML = '<p>Hi, my name is Artem</p><p>At the moment I am studying at ITMO University under the system application software program 09.03.04.</p><p>I started programming from the very beginning of 8th grade. During this time, I managed to pass 2 years of Yandex Lyceum with honors (basic + additional), participate in a hackathon and study the following programming languages to varying degrees:</p><ul><li>java</li><li>postgresql</li><li>React</li><li>HTML</li><li>CSS</li><li>JavaScript</li><li>python</li></ul>';
    document.getElementById('aboutMePhoto').style.display = 'block';
    document.getElementById('table-projects').style.display = 'none';
    document.getElementById('links').style.display = 'none';
    document.querySelector('.content').style.transform = 'translateY(0)';
});

document.getElementById('projectsButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.scene').style.transform = 'translateX(-100%)';
    document.querySelector('.second-scene').style.transform = 'translateX(0)';
    document.getElementById('aboutMePhoto').style.display = 'none';
document.getElementById('secondSceneHeading').textContent = 'My projects:';
document.getElementById('secondSceneText').textContent = '';
    document.getElementById('aboutMePhoto').style.display = 'none';
    document.getElementById('table-projects').style.display = 'flex';
    document.getElementById('links').style.display = 'none';
    document.querySelector('.content').style.transform = 'translateY(0)';
});

document.getElementById('contactsButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.scene').style.transform = 'translateX(-100%)';
    document.querySelector('.second-scene').style.transform = 'translateX(0)';
    document.getElementById('secondSceneHeading').textContent = 'My contacts:';
document.getElementById('secondSceneText').textContent = '';
    document.getElementById('aboutMePhoto').style.display = 'none';
    document.getElementById('table-projects').style.display = 'none';
    document.getElementById('links').style.display = 'flex';
    document.querySelector('.content').style.transform = 'translateY(0)';
});

document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.scene').style.transform = 'translateX(0)';
    document.querySelector('.second-scene').style.transform = 'translateX(100%)';
    document.querySelector('.content').style.transform = 'translateY(100%)';
});
