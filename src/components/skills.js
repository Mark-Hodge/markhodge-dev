import Skill from "../utilities/skill";
import "../styles/skills.css";

function Skills() {
    return (
        <section id="skills">
            <div name='Skills' className="skills">
                <h2>Some of the tech I've worked with.</h2>
                <div className="skillsGrid">
                    <Skill title="C#" alt="The logo icon for CSharp" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                    <Skill title=".NET" alt="The logo icon for .NET" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" />
                    <Skill title=".NET Core" alt="The logo icon for Dot Net Core" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                    <Skill title="MSSQL" alt="The logo icon for Microsoft SQL Server" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
                    <Skill title="Kubernetes" alt="The logo icon for Kubernetes" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                    <Skill title="Google Cloud Platform" alt="The logo icon for Google Cloud" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg" />
                    <Skill title="RedHat" alt="The logo icon for RedHat" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original-wordmark.svg" />
                    <Skill title="Azure" alt="The logo icon for Azure" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg" />
                    <Skill title="Git" alt="The logo icon for Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                    <Skill title="GitHub" alt="The logo icon for GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    <Skill title="Visual Studio" alt="The logo icon for Visual Studio" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
                    <Skill title="Visual Studio Code" alt="The logo icon for Visual Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                    <Skill title="Jet Brains" alt="The logo icon for Jet Brains" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" />
                    <Skill title="Docker" alt="The logo icon for Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    <Skill title="SQLite" alt="The logo icon for SQLite" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg" />
                    <Skill title="JavaScript" alt="The logo icon for Java Script" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <Skill title="MarkDown" alt="The logo icon for MarkDown" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" />
                    <Skill title="Python" alt="The logo icon for Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    <Skill title="Vim" alt="The logo icon for Vim" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" />
                    <Skill title="React" alt="The logo icon for react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <Skill title="HTML 5" alt="The logo icon for HTML 5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                    <Skill title="CSS 3" alt="The logo icon for CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                    <Skill title="Java" alt="The logo icon for Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                    <Skill title="Typescript" alt="The logo icon for Typescript" img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                </div>
            </div>
        </section>
    );
};

export default Skills