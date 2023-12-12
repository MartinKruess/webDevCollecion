export const MongoLinux = () => {
  return (
    <div>
      <p>
        MongoDB 7.0 Community Edition unterstützt die folgenden 64-Bit-
        Versionen von Ubuntu LTS (Langzeitunterstützung) auf der x86_64-
        Architektur:
      </p>
      <ul>
        <li>22.04 LTS („Jammy“)</li>
        <li>20.04 LTS („Focal“)</li>
      </ul>
      <p>
        MongoDB unterstützt nur die 64-Bit-Versionen dieser Plattformen. Um
        festzustellen, welche Ubuntu-Version auf Ihrem Host ausgeführt wird,
        führen Sie den folgenden Befehl auf dem Terminal des Hosts aus:
      </p>
      <pre>
        <code> cat /etc/lsb-release</code>
      </pre>
    </div>
  );
};
