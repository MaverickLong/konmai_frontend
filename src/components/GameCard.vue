<script>
import json from "../config.json";
export default {
  methods: {
    apkLink(version, allocatedServer) {
      var link = "https://" + this.servers[allocatedServer]["domain"];
      if (this.servers[allocatedServer]["httpsPort"] != null) {
        link = link + ":" + this.servers[allocatedServer]["httpsPort"];
      }
      link =
        link +
        "/" +
        this.details[version]["packageName"] +
        "/" +
        this.details[version]["packageName"] +
        "_" +
        this.details[version]["versionString"];
      if (this.details[version]["suffix"] != null) {
        link = link + "." + this.details[version]["suffix"];
      } else {
        link = link + ".apk";
      }
      return link;
    },
    obbLink(version, allocatedServer, type) {
      var link = "https://" + this.servers[allocatedServer]["domain"];
      if (this.servers[allocatedServer]["httpsPort"] != null) {
        link = link + ":" + this.servers[allocatedServer]["httpsPort"];
      }
      link = link + "/" + this.details[version]["obb"][type];
      return link;
    },
  },
  data() {
    return {
      json,
      dialog: false,
      details: {},
      imageUrl: "",
    };
  },
  props: ["gameName"],
  mounted() {
    this.servers = this.json["servers"];
    this.details = this.json["packages"][this.gameName];
    var nameTemp = this.gameName;
    this.imageUrl = "/icons/" + nameTemp.replace(/:/g, "") + ".webp";
  },
  computed: {
    suffix() {
      return function (version) {
        var packSuffix = this.details[version]["suffix"];
        if (packSuffix != null && packSuffix != "apk") {
          return " " + packSuffix.toUpperCase();
        } else {
          if (Object.keys(this.details[version]["obb"]) == 0) {
            return " APK";
          } else {
            return " APK (+下方OBB数据包)";
          }
        }
      };
    },
  },
};
</script>

<template>
  <v-card class="ma-2" @click="dialog = true">
    <v-avatar class="ma-2" v-bind:image="imageUrl" />
    <v-card-text style="padding: 0.5rem">
      {{ gameName }}
    </v-card-text>
  </v-card>

  <v-dialog v-model="dialog" width="75%">
    <v-card>
      <v-card-text style="padding: 16px 24px 0px">
        <span v-if="details['configs'] == null || (details['configs'] != null && details['configs']['aprilFools'] == null)">
          <p class="gameCard">下载 {{ gameName }}</p>
          <p
            v-for="version in Object.keys(details)"
            class="gameCard"
            style="line-height: 2em"
          >
            {{
              version + " " + details[version]["versionString"] + suffix(version)
            }}<br />
            <span v-for="server in details[version]['allocatedServer']">
              <a
                rel="nofollow noopener noreferrer"
                v-if="
                  servers[server] != null && servers[server]['hidden'] != 'true'
                "
                v-bind:href="apkLink(version, server)"
              >
                {{ server }}<br />
              </a>
            </span>
            <span v-for="obb in Object.keys(details[version]['obb'])">
              {{
                version +
                " " +
                details[version]["versionString"] +
                " " +
                obb +
                " OBB数据包文件"
              }}<br />
              <span v-for="server in details[version]['allocatedServer']">
                <a
                  rel="nofollow noopener noreferrer"
                  v-if="
                    servers[server] != null && servers[server]['hidden'] != 'true'
                  "
                  v-bind:href="obbLink(version, server, obb)"
                >
                  {{ server }}<br />
                </a>
              </span>
            </span>
          </p>
        </span>
        <span v-if="details['configs'] != null && details['configs']['aprilFools']">
          <p class="gameCard">{{ gameName }}</p>
          <span v-for="version in Object.keys(details)" >
            <p
              class="gameCard"
              style="line-height: 2em"
              v-if="version != 'configs'"
            >
              {{
                version
              }}<br />
              <span v-for="server in Object.keys(details[version]['urlForceOverride'])">
                <a
                  rel="nofollow noopener noreferrer"
                  v-bind:href="details[version]['urlForceOverride'][server]"
                >
                  {{ server }}<br />
                </a>
              </span>
            </p>
          </span>
        </span>
        <span v-if="details['configs'] != null && details['configs']['comments'] != null">
          <p style="margin-top: 0rem; text-align: right; font-size: 70%; color: grey"> {{ details['configs']['comments'] }} </p>
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useLink } from "vue-router";
</script>
