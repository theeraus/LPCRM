FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80

# Change timezone to local time
ENV NPM_CONFIG_LOGLEVEL info
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

FROM base AS final
WORKDIR /app
COPY bin/publish/  .
ENTRYPOINT ["dotnet", "LPCRM.Api.dll"]