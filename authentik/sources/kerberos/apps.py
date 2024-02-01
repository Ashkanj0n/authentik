"""authentik kerberos source config"""
from authentik.blueprints.apps import ManagedAppConfig


class AuthentikSourceKerberosConfig(ManagedAppConfig):
    """Authentik kerberos app config"""

    name = "authentik.sources.kerberos"
    label = "authentik_sources_kerberos"
    verbose_name = "authentik Sources.Kerberos"
    default = True

    def reconcile_global_load_sources_kerberos_signals(self):
        """Load sources.kerberos signals"""
        self.import_module("authentik.sources.kerberos.signals")
